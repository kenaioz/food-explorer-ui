import { useState, useEffect } from "react";

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
  FileUploader,
  IngredientTest,
} from "../../components/Forms";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

export function Create() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState("");
  const [newIngredientId, setNewIngredientId] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");

  const ingredientsOptions = [
    {
      id: 1,
      name: "Arroz",
    },
    {
      id: 2,
      name: "Feijão",
    },
    {
      id: 3,
      name: "Carne",
    },
  ];
  const categoriesOptions = [
    {
      id: 1,
      name: "Refeições",
    },
    {
      id: 2,
      name: "Sobremesas",
    },
    {
      id: 3,
      name: "Bebidas",
    },
  ];

  function handleAddIngredient() {
    if (!newIngredientId) {
      return alert("Selecione um ingrediente antes de adiciona-lo");
    }

    if (ingredients.includes(newIngredientId)) {
      return alert("O ingrediente não pode ser adicionado duas vezes");
    }

    const ingredient = ingredientsOptions.find(
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

  function formsValidantion() {
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
  }

  function handleForms() {
    formsValidantion();
    console.log({ name, category, ingredients, price, description });
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
                <FileUploader id="imageFile" label="Imagem do prato" />
                <Input
                  bigger
                  id="foodName"
                  label="Nome"
                  placeholder="Ex.: Salada Ceasar"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Dropdown
                  id="categoriesDropDown"
                  label="Categorias"
                  placeholder="Selecione a categoria"
                  categories={categoriesOptions}
                  onChange={(e) => setCategory(Number(e.target.value))}
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
                  <IngredientTest
                    id="IngredientTest"
                    isNew
                    placeholder="Adicionar"
                    ingredients={ingredientsOptions}
                    onChange={setNewIngredientId}
                    onClick={handleAddIngredient}
                  />
                </IngredientItems>

                <Input
                  id="foodPrice"
                  label="Preço"
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Row2>
              <Row3>
                <TextArea
                  id="foodDescription"
                  label="Descrição"
                  placeholder="Teste Placeholder"
                  onChange={(e) => setDescription(e.target.value)}
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
