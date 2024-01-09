import { useState, useEffect } from "react";

import { Container, ContentWrapper } from "./styles";

import { Header } from "../../components/Header";
import { BackWrapper } from "../../components/BackWrapper";
import { CardsSection } from "../../components/CardsSection";
import { CustomTable } from "../../components/CustomTable";
import { Footer } from "../../components/Footer";

import { Layout } from "../../components/Layout";

import { listAllUsers } from "../../services/users";

export function AdminPanel() {
  const [usersData, setUsersData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

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

    fetchUsers();
  }, []);

  return (
    <Container>
      <Header />
      <Layout>
        <ContentWrapper>
          <BackWrapper />
          <CardsSection title="Painel de Admin"></CardsSection>
          <CustomTable data={usersData} headers={tableHeaders} />
        </ContentWrapper>
      </Layout>
      <Footer />
    </Container>
  );
}
