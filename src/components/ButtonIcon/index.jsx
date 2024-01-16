import { Container } from "./styles";

export function ButtonIcon({ icon: Icon, size, quantity, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {quantity >= 0 && <span>{quantity}</span>}
      {Icon && <Icon size={size} />}
    </Container>
  );
}
