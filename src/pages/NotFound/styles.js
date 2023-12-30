import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  font-family: Poppins;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 2rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 24px;
    text-decoration: underline;
  }
`;
