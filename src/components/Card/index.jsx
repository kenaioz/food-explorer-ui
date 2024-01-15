import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, CardContent, CardActions } from "./styles";

import { IoIosHeartEmpty } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import { SmallButton } from "../SmallButton";
import { ButtonIcon } from "../ButtonIcon";
import { Quantity } from "../Quantity";

import { useOrders } from "../../hooks/orders";
import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { api } from "../../services/api";

export function Card({ id, image, title, description, price }) {
  const { user } = useAuth();
  const { handleNewOrders } = useOrders();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  function handleDetails() {
    navigate(`/details/${id}`);
  }

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  function handleFavorities() {
    alert("Favoritos ainda não está funcionando mas será adicionado em breve");
  }

  function handleAddOrders() {
    const order = { id, image, name: title, price, quantity };
    handleNewOrders(order);
  }

  return (
    <Container>
      {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
        <ButtonIcon icon={GoPencil} size={32} onClick={handleEdit} />
      ) : (
        <ButtonIcon
          icon={IoIosHeartEmpty}
          size={32}
          onClick={handleFavorities}
        />
      )}

      <CardContent>
        <img src={`${api.defaults.baseURL}/files/${image}`} alt="Image Food" />

        <a onClick={handleDetails}>
          <h1>{`${title} >`}</h1>
        </a>

        <p>{description}</p>

        <span>R$ {price}</span>
      </CardContent>

      {![USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) && (
        <CardActions>
          <Quantity quantity={quantity} setQuantity={setQuantity} />

          <SmallButton title="Incluir" onClick={handleAddOrders} />
        </CardActions>
      )}
    </Container>
  );
}
