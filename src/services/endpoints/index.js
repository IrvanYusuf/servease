export const ENDPOINTS = {
  categories: {
    root: "/v1/categories",
  },
  banners: {
    root: "/v1/banners",
  },
  videos: {
    root: "/v1/videos",
  },
  auths: {
    register: "/v1/auths/register",
    login: "/v1/auths/login",
  },
  users: {
    detail: (id) => `/v1/users/${id}`,
  },
  partners: {
    root: "/v1/partners",
  },
  services: {
    root: "/v1/services",
    findByCategory: (categoryId) => `/v1/services/category/${categoryId}`,
    detail: (serviceId) => `/v1/services/detail/${serviceId}`,
    reviews: (serviceId) => `/v1/services/reviews/${serviceId}`,
  },
  addresses: {
    root: "/v1/addresses",
    setPrimary: (addressId) => `/v1/addresses/${addressId}/set-primary`,
    getPrimary: "/v1/addresses/primary",
  },
  paymentMethods: {
    root: "/v1/payment-methods",
  },
  bookings: {
    root: "/v1/bookings",
    detail: (bookingId) => `/v1/bookings/detail/${bookingId}`,
    uploadPaymentProof: (bookingId) =>
      `/v1/bookings/payment-proof/${bookingId}`,
    completeBooking: (bookingId) => `/v1/bookings/complete/${bookingId}`,
  },
  reviews: {
    root: "/v1/reviews",
  },

  dashboard: {
    partners: {
      bookings: {
        root: "/v1/dashboard/partners/bookings",
        confirm: (customer_id, booking_id) =>
          `/v1/dashboard/partners/bookings/confirm/${customer_id}/${booking_id}`,
      },
    },
  },
};
