import { api, handleApiError } from "./api";

const createUser = async (name, email, password) => {
  try {
    await api.post("/users", { name, email, password });
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

export { createUser, listAllUsers };
