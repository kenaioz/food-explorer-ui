import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  padding: 28px 0;

  margin-bottom: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 56px 28px 24px;
  }
`;

export const NavBarDesktop = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    gap: 1rem;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const NavBarMobile = styled.nav`
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    cursor: pointer;
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 70%;
    }
  }
`;

export const HeaderButton = styled.button`
  height: fit-content;

  background-color: ${({ theme }) => theme.COLORS.TINT_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: 0;
  padding: 12px 32px;
  border-radius: 5px;

  flex-shrink: 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 12px 16px;
  }

  span {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 12px;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const SideMenu = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  transform: translateX(-100%);

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    z-index: 1000;

    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const LayoutSideMenu = styled.div`
  padding: 0 28px;

  display: flex;
  flex-direction: column;
  gap: 36px;

  ul {
    list-style: none;
    li {
      cursor: pointer;

      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;

      padding: 10px;

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
  }
`;

export const HeaderSideMenu = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 56px 28px 24px;

  margin-bottom: 36px;

  span {
    font-family: Roboto;
    font-size: 21.163px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
