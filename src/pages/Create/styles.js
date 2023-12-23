import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 200px;
`;

export const Forms = styled.form``;

export const FormsFieldset = styled.fieldset`
  border: none;

  display: flex;
  flex-direction: column;
  gap: 32px;

  legend {
    grid-area: title;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 32px;
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;
export const Row2 = styled.div`
  display: flex;
  gap: 32px;
`;
export const Row3 = styled.div`
  display: flex;
`;
export const Row4 = styled.div`
  display: flex;
  justify-content: end;
`;
