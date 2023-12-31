import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { Container, NavBar, HeaderButton } from "./styles";

import { Layout } from "../Layout";
import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";

import logoSVG from "../../assets/Logo.svg";
import LogoAdminSVG from "../../assets/LogoAdmin.svg";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { useOrders } from "../../hooks/orders";

export function Header() {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();
  const { orders } = useOrders();

  const [ordersLength, setOrdersLength] = useState(0);

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
    navigate("/");
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

          <InputSearch
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
            <HeaderButton type="button" onClick={handleNewFood}>
              <span>Novo Prato</span>
            </HeaderButton>
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
