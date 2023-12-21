import { Container, FooterContent } from "./styles";

import { Layout } from "../Layout";

import logoFooterSVG from "../../assets/LogoFooter-SVG.svg";

export function Footer() {
  return (
    <Container>
      <Layout>
        <FooterContent>
          <img src={logoFooterSVG} alt="Logo" />
          <span>© 2023 - Todos os direitos reservados.</span>
        </FooterContent>
      </Layout>
    </Container>
  );
}
