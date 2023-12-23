import styled from "styled-components";

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;

  width: 100%;

  flex: ${({ $bigger }) => ($bigger ? 2 : 1)};
`;

export const ContainerInput = styled.input`
  height: 48px;
  width: 100%;

  padding: 12px 14px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const ContainerTextArea = styled.textarea`
  height: 172px;
  width: 100%;

  padding: 14px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: 0;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const ContainerDropdown = styled.select`
  height: 48px;
  width: 100%;

  padding: 12px 14px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: 0;
  border-right: 12px solid transparent;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  height: 48px;
  width: 100%;

  padding: 4px 8px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;

export const ContainerItem = styled.div`
  width: fit-content;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 8px;
  padding: 10px 16px;

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > button {
    border: none;
    background: none;
  }

  > input {
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const InputIconWrapper = styled.label`
  cursor: pointer;

  height: 48px;
  width: 100%;

  padding: 12px 32px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  span {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const ContainerFile = styled.input`
  display: none;
`;
