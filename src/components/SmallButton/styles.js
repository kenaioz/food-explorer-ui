import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  background-color: ${({ theme, $secundary }) =>
    $secundary ? theme.COLORS.DARK_800 : theme.COLORS.TINT_TOMATO_100};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  border: 0;
  padding: 12px 24px;
  border-radius: 5px;

  flex-shrink: 0;

  height: fit-content;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    padding: 6px 12px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
