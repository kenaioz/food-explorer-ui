import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 60px;
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
  gap: 48px;

  align-items: center;

  > img {
    width: 390px;
    height: 390px;
  }
`;

export const FoodContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const FoodInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
  }
`;

export const FoodActions = styled.div`
  display: flex;
  gap: 33px;
`;
