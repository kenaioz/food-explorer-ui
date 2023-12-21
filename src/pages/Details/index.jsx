import { useNavigate } from "react-router-dom";

import {
  Container,
  BackWrapper,
  DetailsContent,
  FoodContent,
  FoodInfos,
  FoodActions,
} from "./styles";

import { SlArrowLeft } from "react-icons/sl";

import foodImage from "../../assets/FoodImageTests.png";

import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Quantity } from "../../components/Quantity";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

export function Details() {
  return (
    <Container>
      <Header />
      <Layout>
        <Container>
          <BackWrapper>
            <ButtonIcon icon={SlArrowLeft} size={24} />
            <a>voltar</a>
          </BackWrapper>
          <DetailsContent>
            <img src={foodImage} alt="" />

            <FoodContent>
              <FoodInfos>
                <h1>Spaguetti Gambe</h1>

                <span>Massa fresca com camarões e pesto.</span>
              </FoodInfos>

              <FoodActions>
                <Quantity></Quantity>
                <SmallButton title="Incluir ∙ R$ 25,00" />
              </FoodActions>
            </FoodContent>
          </DetailsContent>
        </Container>
      </Layout>
      <Footer />
    </Container>
  );
}
