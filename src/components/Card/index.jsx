import { useNavigate } from "react-router-dom";

import { Container, CardContent, CardActions } from "./styles";

import { IoIosHeartEmpty } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import { SmallButton } from "../SmallButton";
import { ButtonIcon } from "../ButtonIcon";
import { Quantity } from "../Quantity";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

export function Card({ id, image, title, description, price }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleDetails() {
    navigate(`/details/${id}`);
  }

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  function handleFavorities() {
    alert("Teste Favoritos");
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
        <img src={image} alt="Image Food" />

        <a onClick={handleDetails}>
          <h1>{title}</h1>
        </a>

        <p>{description}</p>

        <span>R$ {price}</span>
      </CardContent>

      <CardActions>
        <Quantity />

        <SmallButton title="Incluir" />
      </CardActions>
    </Container>
  );
}
