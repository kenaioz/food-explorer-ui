import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 60px;

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 455px;
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
  }

  .swiper-button-disabled {
    background: none;
  }
`;
