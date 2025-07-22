import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationRegister = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.auths.register, payload);

  return response.data;
};
const mutationLogin = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.auths.login, payload);

  return response.data;
};

const AuthsServices = {
  mutationRegister,
  mutationLogin,
};

export default AuthsServices;
