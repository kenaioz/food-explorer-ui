import { Container, ContentWrapper } from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { CardsSection } from "../../components/CardsSection";
import { OrderCard } from "../../components/OrderCard";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useOrders } from "../../hooks/orders";

export function Orders() {
  const { orders } = useOrders();

  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <BackWrapper />
          <CardsSection title="Pedidos - (Apenas Exibição)">
            <Swiper
              spaceBetween={27}
              slidesPerView={"auto"}
              navigation={true}
              modules={[Navigation]}
            >
              {orders.map((order) => (
                <SwiperSlide key={order.id}>
                  <OrderCard
                    key={order.id}
                    id={order.id}
                    image={order.image}
                    title={order.name}
                    quantity={order.quantity}
                    price={order.price}
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
