import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  DetailsContent,
  FoodContent,
  FoodInfos,
  FoodActions,
  ContentWrapper,
} from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { Chip, ChipWrapper } from "../../components/Chip";
import { Quantity } from "../../components/Quantity";
import { SmallButton } from "../../components/SmallButton";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { useOrders } from "../../hooks/orders";
import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { api } from "../../services/api";
import { getIndexFood } from "../../services/foods";

export function Details() {
  const { user } = useAuth();
  const { handleNewOrders } = useOrders();

  const [quantity, setQuantity] = useState(1);

  const [foodData, setFoodData] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchFood() {
      const response = await getIndexFood(params.id);
      setFoodData(response.data);
    }

    fetchFood();
  }, []);

  function handleAddOrders() {
    const order = {
      id: foodData.id,
      image: foodData.image,
      name: foodData.name,
      price: foodData.price,
      quantity,
    };
    handleNewOrders(order);
    alert("Pedido adicionado");
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
            {foodData.image && (
              <img
                src={`${api.defaults.baseURL}/files/${foodData.image}`}
                alt=""
              />
            )}

            <FoodContent>
              <FoodInfos>
                <h1>{foodData.name}</h1>

                <span>{foodData.description}</span>

                <ChipWrapper>
                  {foodData.ingredients &&
                    foodData.ingredients.map((ingredient) => (
                      <Chip title={ingredient.name} key={ingredient.id} />
                    ))}
                </ChipWrapper>
              </FoodInfos>

              <FoodActions>
                <Quantity quantity={quantity} setQuantity={setQuantity} />

                {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(
                  user.role
                ) ? (
                  <SmallButton
                    title="Editar Prato"
                    onClick={() => handleEdit(params.id)}
                  />
                ) : (
                  <SmallButton
                    title={`Incluir ∙ ${foodData.price}`}
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
