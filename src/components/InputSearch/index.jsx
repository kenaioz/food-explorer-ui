import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Container } from "./styles";

export function InputSearch({ icon: Icon, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      navigate(`/?search=${inputValue}`);
    }
  }

  useEffect(() => {
    async function initFromSearchParams() {
      if (onChange && searchParams.get("search")) {
        setInputValue(searchParams.get("search"));
      }
    }

    initFromSearchParams();
  }, []);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        autoComplete="off"
        type="text"
        value={inputValue}
        id="search"
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange ? setSearchParams({ search: e.target.value }) : null;
          onChange ? onChange(e.target.value) : null;
        }}
        onKeyDown={handleKeyPress}
      />
    </Container>
  );
}
