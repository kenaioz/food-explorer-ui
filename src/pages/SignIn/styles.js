import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 324px;
    height: 48px;
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  border-radius: 16px;
  min-width: 476px;
  padding: 64px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > h1 {
    align-self: center;

    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  > a {
    align-self: center;

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
