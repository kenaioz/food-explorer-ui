import { api, handleApiError } from "./api";

const createUser = async (userData) => {
  try {
    await api.post("/users", userData);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const listAllUsers = async () => {
  try {
    const response = await api.get("/users");

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const updateUser = async (userData) => {
  try {
    console.log(userData);
    await api.patch("/users", userData);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export { createUser, listAllUsers, deleteUser, updateUser };
