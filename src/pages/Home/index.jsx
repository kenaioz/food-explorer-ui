import { useState, useEffect } from "react";

import { Container, ContentWrapper } from "./styles";

import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { api } from "../../services/api";
import { getAllFoods } from "../../services/foods";

export function Home() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      const response = await getAllFoods();
      setFoodData(response.data);
    }

    fetchFoods();
  }, []);

  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <CardsSection title="Refeições">
            {foodData.map((food) => (
              <Card
                key={food.id}
                id={food.id}
                image={`${api.defaults.baseURL}/files/${food.image}`}
                title={`${food.name}  >`}
                description={food.description}
                price={food.price}
              />
            ))}
          </CardsSection>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
