import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 28px 0;

  margin-bottom: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const NavBar = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  img:hover {
    cursor: pointer;
  }
`;

export const HeaderButton = styled.button`
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

  span {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const HeaderCircleButton = styled.button`
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  padding: 10px;

  border-radius: 50%;

  &:disabled {
    opacity: 0.5;
  }
`;
