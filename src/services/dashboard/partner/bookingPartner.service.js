import { ENDPOINTS } from "@/services/endpoints";
import axiosInstance from "@/utils/axios";

const getAllPartnerBookings = async () => {
  const response = await axiosInstance.get(
    ENDPOINTS.dashboard.partners.bookings.root
  );

  return response.data;
};

const confirmBooking = async (customerId, bookingId) => {
  const response = await axiosInstance.patch(
    ENDPOINTS.dashboard.partners.bookings.confirm(customerId, bookingId)
  );
  return response.data;
};

const DashboardPartnerBookingService = {
  getAllPartnerBookings,
  confirmBooking,
};

export default DashboardPartnerBookingService;
