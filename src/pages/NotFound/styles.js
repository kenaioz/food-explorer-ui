import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  div {
    margin-top: 150px;
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

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 1rem;
      }
    }

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      margin-top: 24px;
      text-decoration: underline;

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 0.75rem;
      }
    }
  }
`;
