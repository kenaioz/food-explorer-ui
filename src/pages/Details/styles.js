import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 100px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-bottom: 180px;
  }
`;

export const BackWrapper = styled.div`
  width: fit-content;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 42px;

  > a {
    display: flex;
    align-items: flex-end;
    text-align: center;
    gap: 10px;

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  gap: 3rem;

  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 1rem;
  }

  > img {
    height: 390px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      height: 360px;
    }
  }
`;

export const FoodContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    align-items: center;
  }
`;

export const FoodInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    align-items: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0 2rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      text-align: center;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-family: Poppins;
      font-size: 27.041px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 1.2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      text-align: center;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-family: Poppins;
      font-size: 16.225px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;

export const FoodActions = styled.div`
  display: flex;
  gap: 2.0625rem;

  width: 100%;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
    align-items: center;

    padding: 0 2rem;
    button {
      width: 100%;
    }
  }
`;
