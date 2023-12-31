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

  return (
    <Container>
      {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
        <ButtonIcon icon={GoPencil} size={32} />
      ) : (
        <ButtonIcon icon={IoIosHeartEmpty} size={32} />
      )}

      <CardContent>
        <img src={image} alt="Image Food" />

        <a>
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
