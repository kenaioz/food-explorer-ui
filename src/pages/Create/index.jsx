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
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState("");
  const [newIngredientId, setNewIngredientId] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [ingredientsData, setIngredientsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

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

    setSelectedIngredients((prevState) => [...prevState, ingredient]);
    setIngredients([...ingredients, newIngredientId]);
    setNewIngredientId(0);
  }

  function handleRemoveIngredient(deleted) {
    setSelectedIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== deleted)
    );

    setIngredients(ingredients.filter((ingredient) => ingredient !== deleted));
  }

  async function handleForms() {
    if (!name) {
      return alert("Preencha o nome");
    }
    if (!name) {
      return alert("Preencha o nome");
    }
    if (!category) {
      return alert("Selecione a categoria");
    }
    if (!ingredients) {
      return alert("Selecione os ingredientes");
    }
    if (!price) {
      return alert("Preencha o preço");
    }
    if (!description) {
      return alert("Preencha a descrição");
    }

    const foodId = await createFood({
      name,
      category,
      ingredients,
      price,
      description,
    });

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
                  id="foodName"
                  label="Nome"
                  placeholder="Ex.: Salada Ceasar"
                  onChange={setName}
                  required
                />
                <Dropdown
                  id="categoriesDropDown"
                  label="Categorias"
                  placeholder="Selecione a categoria"
                  categories={categoriesData}
                  onChange={setCategory}
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
                    id="IngredientsSelect"
                    isNew
                    placeholder="Adicionar"
                    ingredients={ingredientsData}
                    onChange={setNewIngredientId}
                    onClick={handleAddIngredient}
                  />
                </IngredientItems>

                <Input
                  id="foodPrice"
                  label="Preço"
                  placeholder="R$ 00,00"
                  onChange={setPrice}
                />
              </Row2>
              <Row3>
                <TextArea
                  id="foodDescription"
                  label="Descrição"
                  placeholder="Teste Placeholder"
                  onChange={setDescription}
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
