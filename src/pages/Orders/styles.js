import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 100px;

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 455px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }
  }

  .swiper-button-prev {
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 285px;
    top: 5%;
    left: 0;
    justify-content: start;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      left: -5px;
      width: 100px;

      &::after {
        margin-left: 5px;
      }
    }
  }

  .swiper-button-next {
    background: linear-gradient(
      270deg,
      rgba(0, 10, 15, 1) 15%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 220px;
    top: 5%;
    right: 0;
    justify-content: end;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      right: -5px;
      width: 100px;

      &::after {
        margin-right: 5px;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }
  }

  .swiper-button-disabled {
    background: none;
  }
`;
