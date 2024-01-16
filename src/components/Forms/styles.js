import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;

  width: 100%;

  flex: ${({ $bigger }) => ($bigger ? 2 : 1)};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex: 1;
  }
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
  outline: none;

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

  height: fit-content;
  width: 100%;

  padding: 8px;
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

  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: none;

  border-radius: 8px;
  padding: 10px 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const ContainerItemSelect = styled.div`
  width: fit-content;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: "transparent";
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: ${({ theme }) => `1px dashed ${theme.COLORS.LIGHT_500}`};

  border-radius: 8px;
  padding: 10px 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > select {
    appearance: none;
    width: ${({ $value }) => ($value == 0 ? "70px" : "fit-content")};
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;

    border: none;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  > select:focus {
    outline: none;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 12px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    span {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;

      @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
        font-size: 12px;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        display: flex;
      }
    }
  }
`;

export const ContainerFile = styled.input`
  display: none;
`;
