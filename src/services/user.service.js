import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const getUser = async (id) => {
  console.log("id", id);

  const response = await axiosInstance.get(ENDPOINTS.users.detail(id));
  console.log(response);

  return response.data;
};

const UsersServices = {
  getUser,
};

export default UsersServices;
