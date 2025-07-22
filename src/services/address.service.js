import axiosInstance from "@/utils/axios";
import { ENDPOINTS } from "./endpoints";

const mutationCreateAddress = async (payload) => {
  const response = await axiosInstance.post(ENDPOINTS.addresses.root, payload);
  return response.data;
};
const getAllAddresses = async () => {
  const response = await axiosInstance.get(ENDPOINTS.addresses.root);
  return response.data;
};

const setPrimaryAddress = async (addressId) => {
  const response = await axiosInstance.patch(
    ENDPOINTS.addresses.setPrimary(addressId)
  );
  return response.data;
};

const getPrimaryAddress = async () => {
  const response = await axiosInstance.get(ENDPOINTS.addresses.getPrimary);
  return response.data;
};

/**
 * Delete an address by its ID.
 * @param {string} addressId - The ID of address to delete.
 */
const deleteAddress = async (addressId) => {
  const response = await axiosInstance.delete(
    `${ENDPOINTS.addresses.root}/${addressId}`
  );
  return response.data;
};

const AddressesService = {
  mutationCreateAddress,
  getAllAddresses,
  setPrimaryAddress,
  deleteAddress,
  getPrimaryAddress,
};

export default AddressesService;
