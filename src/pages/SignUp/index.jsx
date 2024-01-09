import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUser } from "../../services/users";

import { Container, Form } from "./styles";
import { Input } from "../../components/Forms";
import { Button } from "../../components/Button";

import LogoSGV from "../../assets/Logo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function updateUserData(field, data) {
    setUserData({
      ...userData,
      [field]: data,
    });
  }

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!userData.name || !userData.email || !userData.password) {
      return alert("Preencha todos os campos!");
    }

    if (!userData.password.length >= 6) {
      return alert("A senha deve ter pelo menos 6 caracteres");
    }

    try {
      await createUser(userData);
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  return (
    <Container>
      <img src={LogoSGV} alt="" />
      <Form>
        <h1>Crie sua conta</h1>

        <Input
          id="name"
          label="Nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={updateUserData}
        />

        <Input
          id="email"
          label="E-mail"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={updateUserData}
        />

        <Input
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={updateUserData}
        />

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
