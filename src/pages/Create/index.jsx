import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

import { createFood, patchImage } from "../../services/foods";
import { getAllCategories } from "../../services/categories";
import { getAllIngredients } from "../../services/ingredients";

export function Create() {
  const [imageFile, setImageFile] = useState(null);
  const [foodData, setFoodData] = useState({
    name: "",
    category: 0,
    ingredients: [],
    price: "",
    description: "",
  });

  const [ingredientsData, setIngredientsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const [newIngredientId, setNewIngredientId] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchIngredients() {
      const response = await getAllIngredients();
      setIngredientsData(response.data);
    }
    async function fetchCategories() {
      const response = await getAllCategories();
      setCategoriesData(response.data);
    }

    fetchIngredients();
    fetchCategories();
  }, []);

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  function handleAddIngredient() {
    if (!newIngredientId) {
      return alert("Selecione um ingrediente antes de adiciona-lo");
    }

    if (ingredients.includes(newIngredientId)) {
      return alert("O ingrediente não pode ser adicionado duas vezes");
    }

    const ingredient = ingredientsData.find(
      (ingredient) => ingredient.id === newIngredientId
    );

    const updatedingredientsIds = [...ingredients, newIngredientId];
    setSelectedIngredients((prevState) => [...prevState, ingredient]);
    setIngredients([...ingredients, newIngredientId]);
    updateFormsData("ingredients", updatedingredientsIds);
    setNewIngredientId(0);
  }

  function handleRemoveIngredient(deleted) {
    setSelectedIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== deleted)
    );

    const filteredIds = ingredients.filter(
      (ingredient) => ingredient !== deleted
    );
    setIngredients(filteredIds);

    updateFormsData("ingredients", filteredIds);
  }

  function updateFormsData(field, data) {
    setFoodData({
      ...foodData,
      [field]: data,
    });
  }

  async function handleForms() {
    if (!imageFile) {
      return alert("Selecione uma imagem");
    }
    if (!foodData.name) {
      return alert("Preencha o nome");
    }
    if (!foodData.category) {
      return alert("Selecione a categoria");
    }
    if (!foodData.ingredients) {
      return alert("Selecione os ingredientes");
    }
    if (!foodData.price) {
      return alert("Preencha o preço");
    }
    if (!foodData.description) {
      return alert("Preencha a descrição");
    }

    console.log(foodData.ingredients);

    const foodId = await createFood(foodData);

    await patchImage({ foodId: foodId.data, imageFile });
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
              <legend>Adicionar Prato</legend>

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
                  placeholder="Ex.: Salada Ceasar"
                  onChange={updateFormsData}
                  required
                />
                <Dropdown
                  id="category"
                  label="Categorias"
                  placeholder="Selecione a categoria"
                  categories={categoriesData}
                  onChange={updateFormsData}
                />
              </Row1>
              <Row2>
                <IngredientItems label="Ingredientes" bigger>
                  {selectedIngredients.map((ingredient) => (
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
                  placeholder="R$ 00,00"
                  onChange={updateFormsData}
                />
              </Row2>
              <Row3>
                <TextArea
                  id="description"
                  label="Descrição"
                  placeholder="Teste Placeholder"
                  onChange={updateFormsData}
                />
              </Row3>
              <Row4>
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
