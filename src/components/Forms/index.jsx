import { useState, useEffect } from "react";

import {
  LabelInputWrapper,
  ContainerInput,
  ContainerTextArea,
  ContainerDropdown,
  ContainerItems,
  ContainerItem,
  InputIconWrapper,
  ContainerFile,
  ContainerItemSelect,
} from "./styles";

import { FiPlus, FiX, FiUpload, FiCheck } from "react-icons/fi";

export function Input({
  bigger = false,
  value,
  label,
  onChange,
  onKeyDown,
  ...rest
}) {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  return (
    <LabelInputWrapper $bigger={bigger}>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerInput
        id={rest.id}
        placeholder={rest.placeholder}
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.id, e.target.value);
        }}
        type={rest.type ? rest.type : "text"}
        onKeyDown={onKeyDown}
      />
    </LabelInputWrapper>
  );
}

export function TextArea({ label, value, onChange, ...rest }) {
  const [texteAreaValue, setTexteAreaValue] = useState(value || "");
  useEffect(() => {
    setTexteAreaValue(value || "");
  }, [value]);
  return (
    <LabelInputWrapper>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerTextArea
        id={rest.id}
        placeholder={rest.placeholder}
        autoComplete="off"
        value={texteAreaValue}
        onChange={(e) => {
          setTexteAreaValue(e.target.value);
          onChange(e.target.id, e.target.value);
        }}
      />
    </LabelInputWrapper>
  );
}

export function Dropdown({ id, label, categories, onChange, value, ...rest }) {
  const [selectedCategory, setSelectedCategory] = useState(value || "0");

  useEffect(() => {
    setSelectedCategory(value || "0");
  }, [value]);

  return (
    <LabelInputWrapper>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerDropdown
        id={id}
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          onChange(e.target.id, Number(e.target.value));
        }}
      >
        <option value="0" disabled>
          {rest.placeholder}
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id} label={category.name}>
            {category.name}
          </option>
        ))}
      </ContainerDropdown>
    </LabelInputWrapper>
  );
}

export function IngredientItems({ bigger = false, children, label }) {
  return (
    <LabelInputWrapper $bigger={bigger}>
      <span>{label}</span>
      <ContainerItems>{children}</ContainerItems>
    </LabelInputWrapper>
  );
}

export function IngredientItem({ value, onClick }) {
  return (
    <ContainerItem>
      <input
        name={value}
        type="text"
        value={value}
        readOnly={true}
        placeholder="Adicionar"
        size={value.length + 1}
      />
      <button type="button" onClick={onClick}>
        <FiX size={12} />
      </button>
    </ContainerItem>
  );
}

export function IngredientSelect({ ingredients, onChange, onClick, ...rest }) {
  const [selectedIngredient, setSelectedIngredient] = useState("0");

  const handleResetSelect = () => {
    setSelectedIngredient("0");
  };

  return (
    <ContainerItemSelect $value={selectedIngredient}>
      <select
        id={rest.id}
        value={selectedIngredient}
        onChange={(e) => {
          setSelectedIngredient(e.target.value);
          onChange(Number(e.target.value));
        }}
      >
        <option value="0" disabled>
          {rest.placeholder}
        </option>
        {ingredients.map((ingredient) => (
          <option
            key={ingredient.id}
            value={ingredient.id}
            label={ingredient.name}
          >
            {ingredient.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => {
          handleResetSelect();
          onClick();
        }}
      >
        <FiPlus size={12} />
      </button>
    </ContainerItemSelect>
  );
}

export function FileUploader({ imageSelected = false, label, ...rest }) {
  return (
    <LabelInputWrapper $imageselected={imageSelected}>
      <span>{label}</span>
      <InputIconWrapper htmlFor={rest.id}>
        <div>
          {!imageSelected ? (
            <>
              <FiUpload size={24} />
              <span>Selecione uma imagem</span>
            </>
          ) : (
            <>
              <FiCheck size={24} />
              <span>Imagem Selecionada</span>
            </>
          )}
        </div>
        <ContainerFile type="file" {...rest}></ContainerFile>
      </InputIconWrapper>
    </LabelInputWrapper>
  );
}
