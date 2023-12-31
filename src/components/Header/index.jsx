import { useNavigate } from "react-router";

import { FiSearch, FiLogOut } from "react-icons/fi";

import { Container, NavBar } from "./styles";

import { Layout } from "../Layout";
import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";
import { HeaderButton } from "../HeaderButton";

import logoSVG from "../../assets/Logo.svg";
import LogoAdminSVG from "../../assets/LogoAdmin.svg";

import { useAuth } from "../../hooks/auth";
import { USER_PROFILE } from "../../utils/roles";

export function Header() {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();

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
          />

          <InputSearch
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          <HeaderButton />

          <ButtonIcon icon={FiLogOut} size={24} onClick={handleSignOut} />
        </NavBar>
      </Layout>
    </Container>
  );
}
