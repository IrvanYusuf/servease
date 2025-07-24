import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";
const mutationCreateBooking = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.bookings.root, payload);
  return response.data;
};

const getAllBookings = async ({
  status = "",
  review_status,
  page = 1,
  limit = 6,
}) => {
  const params = { page, limit };

  if (status && status.trim() !== "" && status !== "all") {
    params.status = status;
  }

  if (review_status && review_status.trim() !== "" && review_status !== "all") {
    params.review_status = review_status;
  }

  const response = await axiosInstance.get(ENDPOINTS.bookings.root, { params });
  return response.data;
};

const getDetailBooking = async (bookingId) => {
  const response = await axiosInstance.get(
    `${ENDPOINTS.bookings.detail(bookingId)}`
  );
  return response.data;
};

const uploadPaymentProof = async (bookingId, payload) => {
  const response = await axiosInstance.patch(
    ENDPOINTS.bookings.uploadPaymentProof(bookingId),
    payload
  );

  return response.data;
};

const completeBooking = async (bookingId) => {
  const response = await axiosInstance.patch(
    ENDPOINTS.bookings.completeBooking(bookingId)
  );

  return response.data;
};

const BookingsServices = {
  mutationCreateBooking,
  getAllBookings,
  getDetailBooking,
  uploadPaymentProof,
  completeBooking,
};

export default BookingsServices;
