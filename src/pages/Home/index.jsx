import { useState, useEffect } from "react";

import { Container, ContentWrapper, HomeBanner } from "./styles";

import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import Banner from "../../assets/HomeBanner.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

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
          <HomeBanner>
            <img src={Banner} alt="Banner" />
          </HomeBanner>
          <CardsSection title="Refeições">
            <Swiper
              spaceBetween={27}
              slidesPerView={"auto"}
              navigation={true}
              modules={[Navigation]}
            >
              {foodData.map((food) => (
                <SwiperSlide key={food.id}>
                  <Card
                    id={food.id}
                    image={food.image}
                    title={food.name}
                    description={food.description}
                    price={food.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CardsSection>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
