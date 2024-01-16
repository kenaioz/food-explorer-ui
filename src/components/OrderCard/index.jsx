import { Container, CardContent } from "./styles";

import { PiTrash } from "react-icons/pi";

import { ButtonIcon } from "../ButtonIcon";

import { api } from "../../services/api";
import { useOrders } from "../../hooks/orders";

export function OrderCard({ id, image, title, quantity, price }) {
  const { handleRemoveOrder } = useOrders();

  function handleDelete() {
    handleRemoveOrder(id);
  }

  return (
    <Container>
      <span>{quantity}</span>
      <ButtonIcon icon={PiTrash} size={32} onClick={handleDelete} />
      <CardContent>
        <img src={`${api.defaults.baseURL}/files/${image}`} alt="Image Food" />

        <h1>{title}</h1>

        <span>R$ {price}</span>
      </CardContent>
    </Container>
  );
}
