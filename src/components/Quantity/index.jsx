import { Container } from "./styles";

import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { ButtonIcon } from "../ButtonIcon";

export function Quantity({ quantity, setQuantity }) {
  function handlePlus() {
    setQuantity(quantity + 1);
  }
  function handleMinus() {
    if (quantity == 1) {
      return alert("Quantidade não pode ser menor que 1");
    }
    setQuantity(quantity - 1);
  }

  return (
    <Container>
      <ButtonIcon icon={IoIosRemove} size={32} onClick={handleMinus} />
      {quantity > 9 ? <span>{quantity}</span> : <span>0{quantity}</span>}
      <ButtonIcon icon={IoIosAdd} size={32} onClick={handlePlus} />
    </Container>
  );
}
