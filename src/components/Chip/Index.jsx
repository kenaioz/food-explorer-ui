import { ContainerChip, ContainerWrapper } from "./styles";

export function Chip({ title }) {
  return <ContainerChip>{title}</ContainerChip>;
}

export function ChipWrapper({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
