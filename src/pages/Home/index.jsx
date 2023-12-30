import { FiTag } from "react-icons/fi";

import { Container, ContentWrapper } from "./styles";

import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import logoSVG from "../../assets/Logo-SVG.svg";

export function Home() {
  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <CardsSection title="Refeições">
            <Card
              id={1}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
            <Card
              id={2}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
            <Card
              id={3}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
          </CardsSection>
          <CardsSection title="Refeições">
            <Card
              id={1}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
            <Card
              id={2}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
            <Card
              id={3}
              icon={FiTag}
              image={logoSVG}
              title="Spaguetti Gambe  >"
              description="Massa fresca com camarões e pesto. "
              price="10.99"
            />
          </CardsSection>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
