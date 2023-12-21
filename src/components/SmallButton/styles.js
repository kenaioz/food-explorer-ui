import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 16px;

  border: 0;
  padding: 12px 24px;
  border-radius: 5px;

  flex-shrink: 0;

  height: fit-content;

  &:disabled {
    opacity: 0.5;
  }
`;
