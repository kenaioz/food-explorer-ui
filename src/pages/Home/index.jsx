import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
import { getAllCategories } from "../../services/categories";

export function Home() {
  const [searchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [filteredFood, setFilteredFood] = useState({});
  const [searchedFood, setSearchedFood] = useState([]);

  useEffect(() => {
    async function fetchFoodAndCategories() {
      const foodResponse = await getAllFoods();
      const categoriesResponse = await getAllCategories();

      setFoodData(foodResponse.data);

      filterFoodByCategory(foodResponse.data, categoriesResponse.data);

      console.log("teste render", searchParams.get("search"));

      if (searchParams.get("search")) {
        setQuery(searchParams.get("search"));
      }
    }

    fetchFoodAndCategories();
  }, []);

  useEffect(() => {
    async function searchFood() {
      if (query && foodData) {
        console.log("query", query);
        console.log("foodData", foodData);
        const searchResult = foodData.filter((food) =>
          food.name.toLowerCase().includes(query.toLowerCase())
        );

        if (searchResult.length === 0) {
          const searchByIngredients = foodData.filter((food) => {
            const result = food.description
              .toLowerCase()
              .includes(query.toLowerCase());

            return result;
          });

          setSearchedFood(searchByIngredients);
        } else {
          setSearchedFood(searchResult);
        }
      }
    }

    searchFood();
  }, [query]);

  function filterFoodByCategory(foodData, categoriesData) {
    const filteredFoodData = [];

    categoriesData.forEach((category) => {
      filteredFoodData[category.name] = [];
    });

    foodData.forEach((food) => {
      const categoryName = food.category.name;
      filteredFoodData[categoryName].push(food);
    });

    setFilteredFood(filteredFoodData);
  }

  return (
    <Container>
      <Header onChange={setQuery} />
      <Layout>
        <ContentWrapper>
          {query ? (
            <CardsSection title="Pesquisa">
              <Swiper
                spaceBetween={27}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
              >
                {searchedFood &&
                  searchedFood.map((food) => (
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
          ) : (
            <>
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
                  {filteredFood["Refeições"] &&
                    filteredFood["Refeições"].map((food) => (
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

              <CardsSection title="Sobremesa">
                <Swiper
                  spaceBetween={27}
                  slidesPerView={"auto"}
                  navigation={true}
                  modules={[Navigation]}
                >
                  {filteredFood["Sobremesas"] &&
                    filteredFood["Sobremesas"].map((food) => (
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

              <CardsSection title="Bebidas">
                <Swiper
                  spaceBetween={27}
                  slidesPerView={"auto"}
                  navigation={true}
                  modules={[Navigation]}
                >
                  {filteredFood["Bebidas"] &&
                    filteredFood["Bebidas"].map((food) => (
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
            </>
          )}
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
