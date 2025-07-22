import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const getAllBanners = async () => {
  const response = await axiosInstance.get(ENDPOINTS.banners.root);
  return response.data;
};

const BannersService = {
  getAllBanners,
};

export default BannersService;
