import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationCreateService = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.services.root, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const getAllServices = async () => {
  const response = await axiosInstance.get(ENDPOINTS.services.root);
  return response.data;
};

const getAllServicesByCategory = async (categoryId) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.services.findByCategory(categoryId)}`
  );

  return response.data;
};

const getServiceDetail = async (serviceId) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.services.detail(serviceId)}`
  );

  return response.data;
};

const getServiceReviews = async (serviceId) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.services.reviews(serviceId)}`
  );

  return response.data;
};

const ServicesServices = {
  mutationCreateService,
  getAllServices,
  getAllServicesByCategory,
  getServiceDetail,
  getServiceReviews,
};

export default ServicesServices;
