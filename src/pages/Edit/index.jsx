import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  ContentWrapper,
  Forms,
  FormsFieldset,
  Row1,
  Row2,
  Row3,
  Row4,
} from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import {
  Input,
  TextArea,
  Dropdown,
  IngredientItems,
  IngredientItem,
  IngredientSelect,
  FileUploader,
} from "../../components/Forms";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import {
  getIndexFood,
  updateFood,
  patchImage,
  deleteIndexFood,
} from "../../services/foods";
import { getAllCategories } from "../../services/categories";
import { getAllIngredients } from "../../services/ingredients";

export function Edit() {
  const [imageFile, setImageFile] = useState(null);
  const [foodData, setFoodData] = useState({});

  const [ingredientsData, setIngredientsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const [newIngredientId, setNewIngredientId] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientsIds, setIngredientsIds] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchIngredients() {
      const response = await getAllIngredients();
      setIngredientsData(response.data);
    }
    async function fetchCategories() {
      const response = await getAllCategories();
      setCategoriesData(response.data);
    }
    async function fetchFood() {
      const response = await getIndexFood(params.id);

      const arrayIds = response.data.ingredients.map(
        (ingredient) => ingredient.id
      );

      const dataWithIngredientsIds = {
        ...response.data,
        ingredients: arrayIds,
      };

      const { image, ...dataWithoutImage } = dataWithIngredientsIds;

      setFoodData(dataWithoutImage);
      setSelectedIngredients(response.data.ingredients);
      setIngredientsIds(arrayIds);
    }

    fetchIngredients();
    fetchCategories();
    fetchFood();
  }, []);

  useEffect(() => {
    if (foodData.category) {
      if (typeof foodData.category === "object") {
        updateFormsData("category", foodData.category.id);
      }
    }
  }, [foodData]);

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  function handleAddIngredient() {
    if (!newIngredientId) {
      return alert("Selecione um ingrediente antes de adiciona-lo");
    }

    if (ingredientsIds.includes(newIngredientId)) {
      return alert("O ingrediente não pode ser adicionado duas vezes");
    }

    const ingredient = ingredientsData.find(
      (ingredient) => ingredient.id === newIngredientId
    );

    const updatedingredientsIds = [...ingredientsIds, newIngredientId];
    setSelectedIngredients((prevState) => [...prevState, ingredient]);
    setIngredientsIds(updatedingredientsIds);
    updateFormsData("ingredients", updatedingredientsIds);
    setNewIngredientId(0);
  }

  function handleRemoveIngredient(deleted) {
    setSelectedIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== deleted)
    );

    const filteredIds = ingredientsIds.filter(
      (ingredient) => ingredient !== deleted
    );
    setIngredientsIds(filteredIds);

    updateFormsData("ingredients", filteredIds);
  }

  function updateFormsData(field, data) {
    setFoodData({
      ...foodData,
      [field]: data,
    });
  }

  async function handleForms() {
    await updateFood(foodData);

    if (imageFile) {
      await patchImage({ foodId: foodData.id, imageFile });
    }
    navigate("/");
  }

  function handleDeleteFood() {
    deleteIndexFood(foodData.id);
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <BackWrapper />

          <Forms>
            <FormsFieldset>
              <legend>Editar Prato</legend>

              <Row1>
                {!imageFile ? (
                  <FileUploader
                    id="imageFile"
                    label="Imagem do prato"
                    onChange={handleChangeImage}
                  />
                ) : (
                  <FileUploader
                    id="imageFile"
                    label="Imagem do prato"
                    onChange={handleChangeImage}
                    imageSelected
                  />
                )}
                <Input
                  bigger
                  id="name"
                  label="Nome"
                  value={foodData.name}
                  placeholder="Ex.: Salada Ceasar"
                  onChange={updateFormsData}
                />
                <Dropdown
                  id="category"
                  label="Categorias"
                  placeholder="Selecione uma categoria"
                  value={foodData.category}
                  categories={categoriesData}
                  onChange={updateFormsData}
                />
              </Row1>
              <Row2>
                <IngredientItems label="Ingredientes" bigger>
                  {selectedIngredients &&
                    selectedIngredients.map((ingredient) => (
                      <IngredientItem
                        key={ingredient.id}
                        value={ingredient.name}
                        onClick={() => {
                          handleRemoveIngredient(ingredient.id);
                        }}
                      />
                    ))}
                  <IngredientSelect
                    id="ingredients"
                    isNew
                    placeholder="Adicionar"
                    ingredients={ingredientsData}
                    onChange={setNewIngredientId}
                    onClick={handleAddIngredient}
                  />
                </IngredientItems>

                <Input
                  id="price"
                  label="Preço"
                  value={foodData.price}
                  placeholder="R$ 00,00"
                  onChange={updateFormsData}
                />
              </Row2>
              <Row3>
                <TextArea
                  id="description"
                  label="Descrição"
                  value={foodData.description}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={updateFormsData}
                />
              </Row3>
              <Row4>
                <SmallButton
                  title="Excluir prato"
                  secundary
                  onClick={handleDeleteFood}
                />
                <SmallButton title="Salvar alterações" onClick={handleForms} />
              </Row4>
            </FormsFieldset>
          </Forms>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
