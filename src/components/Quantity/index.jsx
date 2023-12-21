import { Container } from "./styles";

import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { ButtonIcon } from "../ButtonIcon";

export function Quantity() {
  return (
    <Container>
      <ButtonIcon icon={IoIosRemove} size={32} />
      <span>01</span>
      <ButtonIcon icon={IoIosAdd} size={32} />
    </Container>
  );
}
