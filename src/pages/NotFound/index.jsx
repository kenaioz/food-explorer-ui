import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
}
