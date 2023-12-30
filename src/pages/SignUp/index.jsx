import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUser } from "../../services/users";

import { Container, Form } from "./styles";
import { Input } from "../../components/Forms";
import { Button } from "../../components/Button";

import LogoSGV from "../../assets/Logo-SVG.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    try {
      await createUser(name, email, password);
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
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
