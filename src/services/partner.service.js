import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationCreatePartner = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.partners.root, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const getAllPartners = async () => {
  const response = await axiosInstance.get(ENDPOINTS.partners.root);
  return response.data;
};

const PartnersServices = {
  mutationCreatePartner,
  getAllPartners,
};

export default PartnersServices;
