import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 100px;

  > div {
    > button {
      margin-top: 35px;
    }
  }
`;

export const FormsFieldset = styled.fieldset`
  border: none;

  display: flex;
  flex-direction: column;
  gap: 25px;

  legend {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 30px;
  }
`;
