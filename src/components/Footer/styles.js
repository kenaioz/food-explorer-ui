import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  padding: 24px 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const FooterContent = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  img {
    height: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      height: 1.5625rem;
    }
  }

  span {
    text-align: right;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.75rem;
    }
  }
`;
