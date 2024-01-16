import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";

export function InputSearch({ id, onChange, onClick }) {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

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
      <FiSearch size={20} onClick={onClick} />
      <input
        id={id}
        autoComplete="off"
        type="text"
        value={inputValue}
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
