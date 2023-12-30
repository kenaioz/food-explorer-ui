import { api, handleApiError } from "./api";

const createUser = async (name, email, password) => {
  try {
    await api.post("/users", { name, email, password });
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export { createUser };
