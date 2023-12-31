import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { SlArrowLeft } from "react-icons/sl";

import { ButtonIcon } from "../../components/ButtonIcon";

export function BackWrapper() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack}>
      <ButtonIcon icon={SlArrowLeft} size={24} />
      Voltar
    </Container>
  );
}
