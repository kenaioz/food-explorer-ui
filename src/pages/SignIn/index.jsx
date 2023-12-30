import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Forms";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import LogoSGV from "../../assets/Logo-SVG.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <img src={LogoSGV} alt="" />
      <Form>
        <h1>Faça login</h1>

        <Input
          id="email"
          label="E-mail"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
