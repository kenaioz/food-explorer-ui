import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 100px;

  .swiper {
    width: 100%;
  }

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

    width: 220px;
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
  }

  .swiper-button-disabled {
    background: none;
  }
`;

export const HomeBanner = styled.div`
  position: relative;

  display: flex;
  justify-content: end;
  align-items: center;

  margin-top: 11rem;
  height: 16.25rem;
  border-radius: 8px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    height: 11rem;
    margin-top: 7rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 7.5rem;
    margin-top: 5rem;
  }

  img {
    position: absolute;
    left: -55px;
    bottom: 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      left: -30px;
      height: 250px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      left: -30px;
      height: 180px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      left: -20px;
      height: 130px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      left: -20px;
      height: 120px;
    }
  }
`;

export const HomeBannerText = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  margin: 5.625rem 5rem 5.625rem 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    gap: 0.1875rem;
    margin: 30px 60px 30px 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 0.1875rem;
    margin: 30px 10px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 36px 0 22px 175px;
  }

  h1 {
    font-family: Poppins;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1rem;
    }
  }
  span {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 0.875rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 140%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.5rem;
    }
  }
`;
