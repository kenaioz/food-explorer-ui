import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";

import { Container, NavBar, HeaderButton, HeaderCircleButton } from "./styles";

import { Layout } from "../Layout";
import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";

import logoSVG from "../../assets/Logo.svg";
import LogoAdminSVG from "../../assets/LogoAdmin.svg";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

import { useOrders } from "../../hooks/orders";

export function Header({ value, onChange }) {
  const [ordersLength, setOrdersLength] = useState(0);

  const navigate = useNavigate();

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

          <InputSearch icon={FiSearch} value={value} onChange={onChange} />

          {[USER_PROFILE.ADMIN, USER_PROFILE.EDITOR].includes(user.role) ? (
            <>
              <HeaderButton type="button" onClick={handleNewFood}>
                <span>Novo Prato</span>
              </HeaderButton>

              <HeaderCircleButton type="button" onClick={handleAdmin}>
                <TbUserEdit size={20} />
              </HeaderCircleButton>
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
