import { Container, CardWrapper } from "./styles";

export function CardsSection({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <CardWrapper>{children}</CardWrapper>
    </Container>
  );
}
