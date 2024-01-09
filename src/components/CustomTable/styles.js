import styled from "styled-components";

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

export const PasswordRow = styled.div`
  display: flex;
  gap: 25px;
`;

export const ActionRow = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 25px;
  justify-content: end;
`;
