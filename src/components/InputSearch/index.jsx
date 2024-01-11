import { useState } from "react";

import { Container } from "./styles";

export function InputSearch({ icon: Icon, value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        value={inputValue}
        id="search"
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </Container>
  );
}
