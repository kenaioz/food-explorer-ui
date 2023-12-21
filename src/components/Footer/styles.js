import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  padding: 24px 0;
  margin-top: 60px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const FooterContent = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};
`;
