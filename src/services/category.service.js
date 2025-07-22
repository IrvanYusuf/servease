import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const getAllCategories = async () => {
  const response = await axiosInstance.get(ENDPOINTS.categories.root);
  return response.data;
};

const CategoriesService = {
  getAllCategories,
};

export default CategoriesService;
