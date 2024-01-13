import { useState, useEffect } from "react";

import { Container, ContentWrapper, FormsFieldset } from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { CardsSection } from "../../components/CardsSection";
import { CustomTable } from "../../components/CustomTable";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/Forms";
import { Chip, ChipWrapper } from "../../components/Chip";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { Modal, Box } from "@mui/material";

import { listAllUsers } from "../../services/users";
import {
  getAllIngredients,
  createNewIngredients,
} from "../../services/ingredients";

export function AdminPanel() {
  const [open, setOpen] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  const [ingredientsData, setIngredientsData] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const response = await listAllUsers();
      setUsersData(response.data);
      setTableHeaders([
        "ID",
        "Nome",
        "Email",
        "Role",
        "Created At",
        "Updated At",
        "Ações",
      ]);
    }

    async function fetchIngredients() {
      const response = await getAllIngredients();
      setIngredientsData(response.data);
    }

    fetchIngredients();
    fetchUsers();
  }, []);

  function handleOpen() {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "#000A0F",
    border: "1px solid #0D161B",
    boxShadow: 24,
    p: 4,
  };

  function updateIngredientsData(field, data) {
    setNewIngredients(data);
  }

  async function handleIngredients() {
    if (!newIngredients) {
      return alert("Preencha o campo de ingredientes");
    }

    try {
      await createNewIngredients(JSON.parse(newIngredients));
      alert("Ingredientes Cadastrados com sucesso");
      window.location.reload(false);
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
      <Header />
      <Layout>
        <ContentWrapper>
          <BackWrapper />
          <Modal open={open} onClose={handleClose}>
            <Box sx={ModalStyle}>
              <FormsFieldset>
                <legend>Adicionar ingredientes</legend>

                <span>
                  Ainda não é possivel a exclusão e edição de ingredientes via
                  interface, faça isso com cuidado direto no banco
                </span>

                <TextArea
                  id="ingredients"
                  label="Novos Ingredientes"
                  value={newIngredients}
                  placeholder={`Ex: ["Ingrediente1", "Ingrediente2"]`}
                  onChange={updateIngredientsData}
                />

                <Button title={"Enviar"} onClick={handleIngredients} />
              </FormsFieldset>
            </Box>
          </Modal>
          <CardsSection title="Gerenciar Ingredientes">
            <ChipWrapper>
              {ingredientsData &&
                ingredientsData.map((ingredient) => (
                  <Chip title={ingredient.name} key={ingredient.id} />
                ))}
            </ChipWrapper>
            <Button title={"Adicionar ingredientes"} onClick={handleOpen} />
          </CardsSection>
          <CardsSection title="Gerenciar Usuários">
            <CustomTable data={usersData} headers={tableHeaders} />
          </CardsSection>
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
