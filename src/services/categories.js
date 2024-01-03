import { api, handleApiError } from "./api";

const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export { getAllCategories };
