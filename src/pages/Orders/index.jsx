import { Container, ContentWrapper } from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { CardsSection } from "../../components/CardsSection";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { useOrders } from "../../hooks/orders";

export function Orders() {
  const { orders } = useOrders();

  console.log(orders);
  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <BackWrapper />
          <CardsSection title="Pedidos">
            
          </CardsSection>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
