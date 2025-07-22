import { ENDPOINTS } from "@/services/endpoints/index.js";
import axiosInstance from "@/utils/axios";

const getAllVideos = async () => {
  const response = await axiosInstance.get(ENDPOINTS.videos.root);
  return response.data;
};

const VideosServices = {
  getAllVideos,
};

export default VideosServices;
