import {
  LabelInputWrapper,
  ContainerInput,
  ContainerTextArea,
  ContainerDropdown,
  ContainerItems,
  ContainerItem,
  InputIconWrapper,
  ContainerFile,
} from "./styles";

import { FiPlus, FiX, FiUpload } from "react-icons/fi";

export function Input({ bigger = false, label, ...rest }) {
  return (
    <LabelInputWrapper $bigger={bigger}>
      <label htmlFor={rest.id}>{label}</label>
      <ContainerInput {...rest} />
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
      <ContainerDropdown {...rest}>
        {categories.map((category, index) => (
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

export function IngredientItem({ isNew = false, value, ...rest }) {
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
      <button type="button" className={isNew ? "button-add" : "button-delete"}>
        {isNew ? <FiPlus size={12} /> : <FiX size={12} />}
      </button>
    </ContainerItem>
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
