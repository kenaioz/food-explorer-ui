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
  gap: 32px;
`;
