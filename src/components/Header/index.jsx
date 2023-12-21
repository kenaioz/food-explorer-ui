import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

// import { useAuth } from "../../hooks/auth";

import { Container, NavBar } from "./styles";

import { Layout } from "../Layout";

import { ButtonIcon } from "../ButtonIcon";
import { InputSearch } from "../InputSearch";
import { Button } from "../Button";

import logoSVG from "../../assets/Logo-SVG.svg";

export function Header() {
  // const { signOut, user } = useAuth();

  return (
    <Container>
      <Layout>
        <NavBar>
          <img src={logoSVG} alt="Logo" />

          <InputSearch
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          <Button icon={PiReceipt} title="Pedidos (1)" />

          <ButtonIcon icon={FiLogOut} size={24} />
        </NavBar>
      </Layout>
    </Container>
  );
}
