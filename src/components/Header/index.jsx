import { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { FiLogOut, FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiReceipt } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

import {
  Container,
  NavBarDesktop,
  NavBarMobile,
  HeaderButton,
  SideMenu,
  LayoutSideMenu,
  HeaderSideMenu,
} from "./styles";

import { Layout } from "../Layout";
import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";
import { Footer } from "../Footer";

import logoSVG from "../../assets/Logo.svg";
import LogoAdminSVG from "../../assets/LogoAdmin.svg";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { useOrders } from "../../hooks/orders";

export function Header({ onChange }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [ordersLength, setOrdersLength] = useState(0);
  const [, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  const { signOut, user } = useAuth();
  const { orders } = useOrders();

  useEffect(() => {
    setOrdersLength(orders.length);
  }, [orders]);

  function handleOrders() {
    navigate("/orders");
  }

  function handleNewFood() {
    navigate("/create");
  }

  function handleHome() {
    if (location.pathname == "/") {
      setSearchParams("");
      return window.location.reload(false);
    }
    navigate("/");
  }

  function handleAdmin() {
    navigate("/admin");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Layout>
        <NavBarDesktop>
          <img
            src={
              [USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role)
                ? LogoAdminSVG
                : logoSVG
            }
            alt="Logo"
            onClick={handleHome}
          />

          <InputSearch id="desktopSearch" onChange={onChange} />

          {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
            <>
              <HeaderButton type="button" onClick={handleNewFood}>
                <span>Novo Prato</span>
              </HeaderButton>

              <HeaderButton type="button" onClick={handleAdmin}>
                <IoMdSettings />
                <span>Configurações</span>
              </HeaderButton>
            </>
          ) : (
            <HeaderButton type="button" onClick={handleOrders}>
              <PiReceipt />
              <span>Pedidos ({ordersLength})</span>
            </HeaderButton>
          )}

          <ButtonIcon icon={FiLogOut} size={24} onClick={handleSignOut} />
        </NavBarDesktop>

        <NavBarMobile>
          <ButtonIcon
            icon={RxHamburgerMenu}
            size={24}
            onClick={() => {
              setMenuIsOpen(true);
              document.body.style.overflow = "hidden";
            }}
          />

          <img
            src={
              [USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role)
                ? LogoAdminSVG
                : logoSVG
            }
            alt="Logo"
            onClick={handleHome}
          />
          {![USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) && (
            <ButtonIcon
              icon={PiReceipt}
              size={24}
              onClick={handleOrders}
              quantity={ordersLength}
            />
          )}
        </NavBarMobile>
      </Layout>

      <SideMenu data-menu-is-open={menuIsOpen}>
        <HeaderSideMenu>
          <ButtonIcon
            icon={FiX}
            size={24}
            onClick={() => {
              setMenuIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          />

          <span>Menu</span>
        </HeaderSideMenu>

        <LayoutSideMenu>
          <InputSearch
            id="mobileSearch"
            onChange={onChange}
            onClick={() => {
              setMenuIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          />

          <ul>
            {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) && (
              <>
                <li
                  onClick={() => {
                    handleNewFood(), (document.body.style.overflow = "auto");
                  }}
                >
                  Novo Prato
                </li>
                <li
                  onClick={() => {
                    handleAdmin(), (document.body.style.overflow = "auto");
                  }}
                >
                  Configurações
                </li>
              </>
            )}
            <li
              onClick={() => {
                handleSignOut(), (document.body.style.overflow = "auto");
              }}
            >
              Sair
            </li>
          </ul>
        </LayoutSideMenu>

        <Footer />
      </SideMenu>
    </Container>
  );
}
