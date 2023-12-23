import { Container } from "./styles";

export function SmallButton({ secundary = false, title, ...rest }) {
  return (
    <Container $secundary={secundary} type="button" {...rest}>
      {title}
    </Container>
  );
}
