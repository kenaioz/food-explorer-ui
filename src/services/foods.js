import { api, handleApiError } from "./api";

const createUser = async (name, category, ingredients, price, description) => {
  try {
    await api.post("/foods", {
      name,
      category,
      ingredients,
      price,
      description,
    });
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export { createUser };
