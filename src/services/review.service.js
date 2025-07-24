import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationCreateReview = async (bookingId, payload) => {
  const response = await axiosInstance.post(
    `${ENDPOINTS.reviews.root}/${bookingId}`,
    payload
  );
  return response.data;
};

const getAllReviews = async () => {
  const response = await axiosInstance.get(ENDPOINTS.reviews.root);
  return response.data;
};

const ReviewsServices = {
  mutationCreateReview,
  getAllReviews,
};

export default ReviewsServices;
