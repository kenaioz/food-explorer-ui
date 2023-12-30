import { Container } from "./styles";

export function InputSearch({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} id="search" />
    </Container>
  );
}
