import { useState } from "react";
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
import { GoPencil } from "react-icons/go";
import { ButtonIcon } from "../ButtonIcon";

const cellStyles = {
  color: "#fff",
  borderBottom: 0,
};

export function CustomTable({ data, headers }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#000A0F",
    border: "1px solid #0D161B",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={ModalStyle}>
          <h1>Teste</h1>
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
                    border: 0,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
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
                  <ButtonIcon icon={GoPencil} size={24} onClick={handleOpen} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
