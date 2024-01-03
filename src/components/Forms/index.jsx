import { useState } from "react";

import {
  LabelInputWrapper,
  ContainerInput,
  ContainerTextArea,
  ContainerDropdown,
  ContainerItems,
  ContainerItem,
  InputIconWrapper,
  ContainerFile,
  ContainerItemTest,
} from "./styles";

import { FiPlus, FiX, FiUpload } from "react-icons/fi";

export function Input({ bigger = false, label, ...rest }) {
  return (
    <LabelInputWrapper $bigger={bigger}>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerInput autocomplete="off" {...rest} />
    </LabelInputWrapper>
  );
}

export function TextArea({ label, ...rest }) {
  return (
    <LabelInputWrapper>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerTextArea {...rest} />
    </LabelInputWrapper>
  );
}

export function Dropdown({ label, categories, ...rest }) {
  return (
    <LabelInputWrapper>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerDropdown defaultValue="" {...rest}>
        <option value="" disabled hidden>
          {rest.placeholder}
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
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

export function IngredientItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <ContainerItem $isnew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder="Adicionar"
        size={isNew ? 8 : value.length}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus size={12} /> : <FiX size={12} />}
      </button>
    </ContainerItem>
  );
}

export function IngredientTest({
  isNew = false,
  ingredients,
  onChange,
  onClick,
  ...rest
}) {
  const [selectedIngredient, setSelectedIngredient] = useState("0");

  const handleResetSelect = () => {
    setSelectedIngredient("0");
  };

  return (
    <ContainerItemTest $isnew={isNew}>
      <select
        value={selectedIngredient}
        onChange={(e) => {
          setSelectedIngredient(e.target.value);
          onChange(Number(e.target.value));
        }}
      >
        <option value="0" disabled hidden>
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
          onClick(); // Chame a função onClick após redefinir a seleção
        }}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus size={12} /> : <FiX size={12} />}
      </button>
    </ContainerItemTest>
  );
}

export function FileUploader({ label, ...rest }) {
  return (
    <LabelInputWrapper>
      <span>{label}</span>
      <InputIconWrapper htmlFor={rest.id}>
        <div>
          <FiUpload size={24} />
          <span>Selecione uma imagem</span>
        </div>
        <ContainerFile type="file" {...rest}></ContainerFile>
      </InputIconWrapper>
    </LabelInputWrapper>
  );
}
