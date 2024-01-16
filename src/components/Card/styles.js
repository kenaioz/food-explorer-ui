import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 304px;
  padding: 24px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  background: ${({ theme }) => theme.COLORS.DARK_200};

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 210px;
  }

  > button {
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  > img {
    width: 176px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 120px;
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.875rem;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TINT_CAKE_200};
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1rem;
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
    }
  }
`;
