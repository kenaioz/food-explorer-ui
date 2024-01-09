import { useState } from "react";

import { FormsFieldset, PasswordRow, ActionRow } from "./styles";
import { GoPencil } from "react-icons/go";

import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
} from "@mui/material";

import { ButtonIcon } from "../ButtonIcon";
import { SmallButton } from "../SmallButton";
import { Input, Dropdown } from "../Forms";

import { deleteUser, updateUser } from "../../services/users";

const cellStyles = {
  color: "#fff",
  borderBottom: 0,
};

export function CustomTable({ data, headers }) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [role, setRole] = useState("0");

  const roles = [
    { id: 1, name: "admin" },
    { id: 2, name: "editor" },
    { id: 3, name: "customer" },
  ];

  const handleOpen = (userData) => {
    setOpen(true);
    setUserData({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    });
  };
  const handleClose = () => setOpen(false);

  function updateUserData(field, data) {
    setUserData({
      ...userData,
      [field]: data,
    });
  }

  function updateUserRole(field, data) {
    const { name } = roles.find((role) => role.id == data);

    updateUserData(field, name);
  }

  async function handleUpdate() {
    if (!userData.name) {
      return alert("Preencha o nome");
    }
    if (!userData.email) {
      return alert("Selecione a categoria");
    }
    if (
      (!userData.old_password && userData.new_password) ||
      (userData.old_password && !userData.new_password)
    ) {
      return alert(
        "Os dois campos de senha precisam estar preenchidos ou vazios"
      );
    }

    try {
      await updateUser(userData);
      alert("Usuário atualizado com sucesso!");
      window.location.reload(false);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível atualizar o usuário.");
      }
    }
  }

  async function handleDelete() {
    await deleteUser(userData.id);
    window.location.reload(false);
  }

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

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={ModalStyle}>
          <FormsFieldset>
            <legend>Editar usuário</legend>
            <Input
              id="name"
              label="Nome"
              placeholder="Nome do usuário"
              value={userData.name}
              onChange={updateUserData}
            />
            <Input
              id="email"
              label="Email"
              placeholder="Email do usuário"
              value={userData.email}
              onChange={updateUserData}
            />
            {userData.role !== "admin" && (
              <Dropdown
                id="role"
                label="Nova role"
                placeholder="Selecione a nova role do usuário"
                categories={roles}
                onChange={updateUserRole}
              />
            )}
            <PasswordRow>
              <Input
                id="old_password"
                type="password"
                label="Senha antiga"
                placeholder="Digite a senha antiga"
                onChange={updateUserData}
              />
              <Input
                id="new_password"
                type="password"
                label="Nova senha"
                placeholder="Digite a nova senha"
                onChange={updateUserData}
              />
            </PasswordRow>

            <ActionRow>
              {userData.role !== "admin" && (
                <SmallButton title="Excluir" secundary onClick={handleDelete} />
              )}

              <SmallButton title="Salvar alterações" onClick={handleUpdate} />
            </ActionRow>
          </FormsFieldset>
        </Box>
      </Modal>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          maxHeight: 500,
          color: "#fff",
        }}
      >
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: "#0D1D25",
                    ...cellStyles,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },

                  "&:nth-of-type(even)": {
                    backgroundColor: "#0D1D25",
                  },

                  "&:nth-of-type(odd)": {
                    backgroundColor: "#00070A",
                  },
                }}
              >
                <TableCell sx={cellStyles}>{item.id}</TableCell>
                <TableCell sx={cellStyles}>{item.name}</TableCell>
                <TableCell sx={cellStyles}>{item.email}</TableCell>
                <TableCell sx={cellStyles}>{item.role}</TableCell>
                <TableCell sx={cellStyles}>{item.updated_at}</TableCell>
                <TableCell sx={cellStyles}>{item.created_at}</TableCell>
                <TableCell align="center" sx={cellStyles}>
                  <ButtonIcon
                    icon={GoPencil}
                    size={24}
                    onClick={() => handleOpen(item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
