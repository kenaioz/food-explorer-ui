import styled from "styled-components";

export const Container = styled.button`
  height: fit-content;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 0;
  padding: 12px 32px;
  border-radius: 5px;

  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
  }
`;
