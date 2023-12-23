import styled from "styled-components";

export const Container = styled.a`
  width: fit-content;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 42px;

  display: flex;
  align-items: flex-end;
  text-align: center;
  gap: 10px;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
