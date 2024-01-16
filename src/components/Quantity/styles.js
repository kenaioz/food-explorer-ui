import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 7px;
  }

  > span {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
`;
