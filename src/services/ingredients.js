import { api, handleApiError } from "./api";

const getAllIngredients = async () => {
  try {
    const response = await api.get("/ingredients");

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const createNewIngredients = async (newIngredients) => {
  try {
    await api.post("/ingredients", newIngredients);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export { getAllIngredients, createNewIngredients };
