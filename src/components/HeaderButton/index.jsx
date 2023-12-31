import { useState } from "react";

import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

export function HeaderButton() {
  const { user } = useAuth();

  const [ordersLenght, setOrdersLenght] = useState(0);

  function handleOrders() {
    alert("Teste ver pedidos");
  }

  function handleNewFood() {
    alert("Teste criar prato");
  }

  return (
    <Container
      type="button"
      onClick={
        [USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role)
          ? handleNewFood
          : handleOrders
      }
    >
      <PiReceipt />
      {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
        <span>Novo Prato</span>
      ) : (
        <span>Pedidos ({ordersLenght})</span>
      )}
    </Container>
  );
}
