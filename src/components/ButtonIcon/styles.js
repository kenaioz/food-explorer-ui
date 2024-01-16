import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: relative;

  span {
    position: absolute;
    right: -10px;
    top: -10px;

    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
