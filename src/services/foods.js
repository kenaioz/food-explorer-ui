import { api, handleApiError } from "./api";

const createFood = async (foodData) => {
  try {
    const response = await api.post("/foods", foodData);

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const updateFood = async (foodData) => {
  try {
    await api.put(`/foods`, foodData);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const patchImage = async ({ foodId, imageFile }) => {
  try {
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imageFile);
    fileUploadForm.append("food_id", foodId);

    await api.patch("/foods/files", fileUploadForm);
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const getAllFoods = async () => {
  try {
    const response = await api.get("/foods");

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const getIndexFood = async (id) => {
  try {
    const response = await api.get(`/foods/${id}`);

    return response;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

const deleteIndexFood = async (id) => {
  try {
    await api.delete(`/foods/${id}`);

    return;
  } catch (error) {
    handleApiError(error);
    return error;
  }
};

export {
  createFood,
  updateFood,
  patchImage,
  getAllFoods,
  getIndexFood,
  deleteIndexFood,
};
