import { useState } from "react";

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
} from "../../components/Forms";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

export function Create() {
  const [ingredients, setIngredients] = useState("Batata Frita");
  const [newTag, setNewTag] = useState("");

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
                />
                <Dropdown
                  id="categoriesDropDown"
                  label="Categorias"
                  categories={[
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
                  ]}
                />
              </Row1>
              <Row2>
                <IngredientItems label="Ingredientes" bigger>
                  <IngredientItem
                    id={1}
                    value={ingredients}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                  <IngredientItem
                    id="ingredientsItems"
                    isNew
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                </IngredientItems>

                <Input id="foodPrice" label="Preço" placeholder="R$ 00,00" />
              </Row2>
              <Row3>
                <TextArea
                  id="foodDescription"
                  label="Descrição"
                  placeholder="Teste Placeholder"
                />
              </Row3>
              <Row4>
                <SmallButton title="Salvar alterações" />
              </Row4>
            </FormsFieldset>
          </Forms>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
