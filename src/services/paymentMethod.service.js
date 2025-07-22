import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationPaymentMethod = async (payload) => {
  const response = await axiosInstance.post(
    ENDPOINTS.paymentMethods.root,
    payload
  );

  return response.data;
};

const getAllPaymentMethods = async () => {
  const response = await axiosInstance.get(ENDPOINTS.paymentMethods.root);
  return response.data;
};

const PaymentMethodsServices = {
  mutationPaymentMethod,
  getAllPaymentMethods,
};

export default PaymentMethodsServices;
