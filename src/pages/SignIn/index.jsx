import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Forms";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import LogoSGV from "../../assets/Logo.svg";

export function SignIn() {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();

  function updateSignInData(field, data) {
    setSignInData({
      ...signInData,
      [field]: data,
    });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSignIn();
    }
  }

  async function handleSignIn() {
    if (!signInData.email || !signInData.password) {
      return alert("Preencha todos os campos");
    }

    try {
      await signIn(signInData);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar.");
      }
    }
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
          onChange={updateSignInData}
          onKeyDown={handleKeyPress}
        />

        <Input
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={updateSignInData}
          onKeyDown={handleKeyPress}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
