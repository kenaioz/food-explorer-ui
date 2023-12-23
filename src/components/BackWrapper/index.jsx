import { Container } from "./styles";

import { SlArrowLeft } from "react-icons/sl";

import { ButtonIcon } from "../../components/ButtonIcon";

export function BackWrapper() {
  return (
    <Container>
      <ButtonIcon icon={SlArrowLeft} size={24} />
      Voltar
    </Container>
  );
}
