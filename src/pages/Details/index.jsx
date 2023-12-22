import { useNavigate } from "react-router-dom";

import {
  Container,
  BackWrapper,
  DetailsContent,
  FoodContent,
  FoodInfos,
  FoodActions,
  ContentWrapper,
} from "./styles";

import { SlArrowLeft } from "react-icons/sl";

import foodImage from "../../assets/FoodImageTests.png";

import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Chip, ChipWrapper } from "../../components/Chip";
import { Quantity } from "../../components/Quantity";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

export function Details() {
  return (
    <Container>
      <Header />

      <Layout>
        <ContentWrapper>
          <BackWrapper>
            <a>
              <ButtonIcon icon={SlArrowLeft} size={24} />
              Voltar
            </a>
          </BackWrapper>
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
                <SmallButton title="Incluir ∙ R$ 25,00" />
              </FoodActions>
            </FoodContent>
          </DetailsContent>
        </ContentWrapper>
      </Layout>

      <Footer />
    </Container>
  );
}
