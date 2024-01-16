import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin: 48px 0;

  h2 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 23px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.125rem;
    }
  }
`;
