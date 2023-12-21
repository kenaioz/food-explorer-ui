import { useState } from "react";

import { Container, CardContent, CardActions } from "./styles";

import { IoIosHeartEmpty } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import { SmallButton } from "../SmallButton";
import { ButtonIcon } from "../ButtonIcon";
import { Quantity } from "../Quantity";

export function Card({ id, image, title, description, price }) {
  const [teste, setTeste] = useState("costumer");
  return (
    <Container>
      <ButtonIcon
        icon={teste == "admin" ? GoPencil : IoIosHeartEmpty}
        size={32}
      />

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
