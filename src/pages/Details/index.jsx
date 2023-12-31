import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  DetailsContent,
  FoodContent,
  FoodInfos,
  FoodActions,
  ContentWrapper,
} from "./styles";

import foodImage from "../../assets/FoodImageTests.png";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { Chip, ChipWrapper } from "../../components/Chip";
import { Quantity } from "../../components/Quantity";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

export function Details() {
  const [priceTest, setPriceTest] = useState("R$ 25,00");

  const navigate = useNavigate();
  const params = useParams();

  const { user } = useAuth();

  function handleAddOrders() {
    alert("Adicionar ao pedido");
  }

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <Container>
      <Header />

      <Layout>
        <ContentWrapper>
          <BackWrapper />
          <DetailsContent>
            <img src={foodImage} alt="" />

            <FoodContent>
              <FoodInfos>
                <h1>Spaguetti Gambe</h1>

                <span>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim. O pão naan dá um toque especial.
                </span>

                <ChipWrapper>
                  <Chip title="teste" />
                  <Chip title="teste" />
                  <Chip title="teste" />
                  <Chip title="teste" />
                  <Chip title="teste" />
                </ChipWrapper>
              </FoodInfos>

              <FoodActions>
                <Quantity></Quantity>

                {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(
                  user.role
                ) ? (
                  <SmallButton
                    title="Editar Prato"
                    onClick={() => handleEdit(params.id)}
                  />
                ) : (
                  <SmallButton
                    title={`Incluir ∙ ${priceTest}`}
                    onClick={handleAddOrders}
                  />
                )}
              </FoodActions>
            </FoodContent>
          </DetailsContent>
        </ContentWrapper>
      </Layout>

      <Footer />
    </Container>
  );
}
