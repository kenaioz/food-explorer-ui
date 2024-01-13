import { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

import { Container, NavBar, HeaderButton } from "./styles";

import { Layout } from "../Layout";
import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";

import logoSVG from "../../assets/Logo.svg";
import LogoAdminSVG from "../../assets/LogoAdmin.svg";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { useOrders } from "../../hooks/orders";

export function Header({ onChange }) {
  const [, setSearchParams] = useSearchParams();

  const [ordersLength, setOrdersLength] = useState(0);

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
      return window.location.reload();
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
        <NavBar>
          <img
            src={
              [USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role)
                ? LogoAdminSVG
                : logoSVG
            }
            alt="Logo"
            onClick={handleHome}
          />

          <InputSearch icon={FiSearch} onChange={onChange} />

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
        </NavBar>
      </Layout>
    </Container>
  );
}
