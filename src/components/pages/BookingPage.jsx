import { useAuth } from "@/context/authContext";
import UsersServices from "@/services/user.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, Placeholder } from "react-bootstrap";
import LabelInput from "@/components/atoms/LabelInput";
import { genderFormat } from "@/utils/genderFormat";
import ServicesServices from "@/services/service.service";
import { FaStar } from "react-icons/fa6";
import ActionButton from "@/components/atoms/ActionButton";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookingSchema } from "@/schema/booking.schema";
import PaymentMethodsServices from "@/services/paymentMethod.service";
import AddressesService from "@/services/address.service";
import CardAlamat from "@/components/molecules/CardAlamat";
import { NumericFormat } from "react-number-format";
import { APP_FEE } from "@/constants/constants";
import BookingsServices from "@/services/booking.service";
import { swal } from "@/utils/sweetAlert";
const BookingPage = () => {
  const { decodedToken } = useAuth();
  const idMitra = localStorage.getItem("idMitra");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(createBookingSchema),
    defaultValues: {
      bring_ladder: "false",
      payment_method_id: "",
    },
  });
  const { data: dataUser, isLoading } = useQuery({
    queryKey: ["user", decodedToken.id],
    queryFn: () => UsersServices.getUser(decodedToken.id),
  });

  const { data: service, isLoading: isLoadingService } = useQuery({
    queryKey: ["detail-service", idMitra],
    queryFn: () => ServicesServices.getServiceDetail(idMitra),
  });

  const { data: dataPaymentMethods, isLoading: isLoadingPaymentMethod } =
    useQuery({
      queryKey: ["payment-methods"],
      queryFn: PaymentMethodsServices.getAllPaymentMethods,
    });

  const { data: dataPrimaryAddress, isLoading: isLoadingPrimaryAddress } =
    useQuery({
      queryKey: ["primary-address"],
      queryFn: AddressesService.getPrimaryAddress,
    });

  const selectedBringLadder = watch("bring_ladder");
  const selectedPaymentMethod = watch("payment_method_id");
  const bookingDate = watch("booking_date");
  const bookingTime = watch("booking_time");

  const selectedPayment = dataPaymentMethods?.data.find(
    (item) => item._id === selectedPaymentMethod
  );

  const { mutate, isPending } = useMutation({
    mutationFn: BookingsServices.mutationCreateBooking,
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      reset();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (error) => {
      console.log(error);
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    const payload = {
      address_id: dataPrimaryAddress.data._id,
      service_id: idMitra,
      partner_id: service.data.partner_id._id,
      payment_method_id: selectedPaymentMethod,
      total_price: APP_FEE + service.data.price,
      bring_ladder: selectedBringLadder === "true" ? true : false,
      ...data,
    };
    console.log(payload);
    mutate(payload);
  };
  return (
    <div className="container w-100 end-0">
      <h2>Booking Page</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="needs-validation"
      >
        <div className="row justify-content-between z-3">
          <div className="col-lg-8 col-12 mt-4">
            <div>
              <div className="mt-4">
                <Card border="0" className="shadow-sm h-100 mt-3">
                  <Card.Body>
                    <div className="d-flex column-gap-3">
                      <img
                        src={service?.data && service?.data?.thumbnail}
                        alt={service?.data && service?.data?.name}
                        style={{ width: "160px", height: "120px" }}
                        className="object-fit-cover rounded-4"
                      />
                      <div>
                        <span className="fw-bold text-secondary">
                          {service?.data && service?.data.category_id.name}
                        </span>
                        <h5 className="fs-4">
                          {service?.data && service.data.name}
                        </h5>
                        <div className="d-flex align-items-center column-gap-2">
                          <FaStar className="text-warning" />
                          <span className="fw-bold">
                            {service?.data && service.data.rating}{" "}
                          </span>
                          <span className="fw-bold text-secondary">
                            {service?.data && service.data.total_reviews}{" "}
                            Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* kontak informasi */}
              <div className="mt-4">
                <span className="fs-5">Informasi Kontak</span>
                <Card border="0" className="shadow-sm h-100 mt-3">
                  <Card.Body>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="mb-3">
                          <LabelInput target={"name"} labelText={"Name"} />
                          <input
                            className={`form-control`}
                            type="text"
                            value={dataUser?.data ? dataUser.data.name : ""}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-3">
                          <LabelInput target={"email"} labelText={"Email"} />
                          <input
                            className={`form-control`}
                            type="text"
                            value={dataUser?.data ? dataUser.data.email : ""}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-3">
                          <LabelInput
                            target={"phone"}
                            labelText={"Nomor Handphone"}
                          />
                          <input
                            className={`form-control`}
                            type="text"
                            value={dataUser?.data ? dataUser.data.phone : ""}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="mb-3">
                          <LabelInput
                            target={"gender"}
                            labelText={"Jenis Kelamin"}
                          />
                          <input
                            className={`form-control`}
                            type="text"
                            value={genderFormat(
                              dataUser?.data ? dataUser.data.gender : ""
                            )}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              {/* alamat informasi */}
              <div className="mt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fs-5">Informasi Alamat</span>
                  <Link to={"/profile/daftar-alamat"}>Ganti Alamat</Link>
                </div>
                <Card border="0" className="shadow-sm h-100 mt-3">
                  <Card.Body>
                    {isLoadingPrimaryAddress ? (
                      <Placeholder as="div" animation="glow">
                        <Placeholder
                          style={{ height: "180px", width: "100%" }}
                          className="rounded"
                        />
                      </Placeholder>
                    ) : dataPrimaryAddress?.data ? (
                      <CardAlamat
                        address={
                          dataPrimaryAddress.data && dataPrimaryAddress?.data
                        }
                        showAction={false}
                      />
                    ) : (
                      "tidak ada alamat dipilih"
                    )}
                  </Card.Body>
                </Card>
              </div>
              {/* tanggal dan waktu */}
              <div className="mt-4">
                <span className="fs-5">Informasi Tanggal dan Waktu</span>
                <Card border="0" className="shadow-sm h-100 mt-3">
                  <Card.Body>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <LabelInput
                            target={"date_booking"}
                            labelText={"Tanggal"}
                          />
                          <input
                            className={`form-control ${
                              errors.booking_date ? "is-invalid" : ""
                            }`}
                            type="date"
                            {...register("booking_date")}
                          />
                          {errors.booking_date && (
                            <div className="invalid-feedback">
                              {errors.booking_date.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <LabelInput
                            target={"time_booking"}
                            labelText={"Waktu"}
                          />
                          <input
                            className={`form-control ${
                              errors.booking_time ? "is-invalid" : ""
                            }`}
                            type="time"
                            {...register("booking_time")}
                          />
                          {errors.booking_time && (
                            <div className="invalid-feedback">
                              {errors.booking_time.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              {/* apakah membawa tangga? */}
              {service?.data &&
                service.data.category_id.name !== "Smartphone" && (
                  <div className="mt-4">
                    <span className="fs-5">Informasi Lainnya</span>
                    <Card border="0" className="shadow-sm h-100 mt-3">
                      <Card.Body>
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3">
                              <LabelInput
                                target={"name"}
                                labelText={"Apakah perlu membawa tangga"}
                              />
                              <div className="d-flex column-gap-4 mt-2">
                                <div className="me-0 form-check-inline">
                                  <input
                                    className={`btn-check ${
                                      errors.bring_ladder ? "is-invalid" : ""
                                    }`}
                                    type="radio"
                                    name="tangga"
                                    value={"true"}
                                    id={"flexRadioDefault1"}
                                    {...register("bring_ladder")}
                                  />
                                  <label
                                    className={`px-4 ${
                                      selectedBringLadder === "true"
                                        ? "btn-orange btn-main"
                                        : "btn-main-outline-orange btn-main-outline"
                                    }`}
                                    htmlFor="flexRadioDefault1"
                                  >
                                    Ya
                                  </label>
                                </div>
                                <div className="me-0 form-check-inline">
                                  <input
                                    className={`btn-check ${
                                      errors.bring_ladder ? "is-invalid" : ""
                                    }`}
                                    type="radio"
                                    name="tangga"
                                    value={"false"}
                                    id="flexRadioDefault2"
                                    {...register("bring_ladder")}
                                  />
                                  <label
                                    className={`px-4 ${
                                      selectedBringLadder === "false"
                                        ? "btn-orange btn-main"
                                        : "btn-main-outline-orange btn-main-outline"
                                    }`}
                                    htmlFor="flexRadioDefault2"
                                  >
                                    Tidak
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              {/* metode pembayaran */}
              <div className="mt-4">
                <span className="fs-5">Informasi Pembayaran</span>
                <Card border="0" className="shadow-sm h-100 mt-3">
                  <Card.Body>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-3">
                          <LabelInput labelText={"Metode Pembayaran"} />
                          <div className="d-flex column-gap-4 mt-2">
                            {dataPaymentMethods?.data &&
                              dataPaymentMethods.data.map((payment, index) => (
                                <div className="me-0 form-check-inline">
                                  <input
                                    className="btn-check ps-0 ms-0"
                                    type="radio"
                                    value={payment._id}
                                    id={`flexRadioDefault${payment._id}`}
                                    {...register("payment_method_id")}
                                  />
                                  <label
                                    className={`px-4 ${
                                      selectedPaymentMethod === payment._id
                                        ? "btn-orange btn-main"
                                        : "btn-main-outline-orange btn-main-outline"
                                    }`}
                                    htmlFor={`flexRadioDefault${payment._id}`}
                                  >
                                    {payment.name}
                                  </label>
                                </div>
                              ))}
                          </div>
                          {errors.payment_method_id && (
                            <div className="text-danger mt-2">
                              {errors.payment_method_id.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-5 col-12">
            <span className="fs-5">Ringkasan Booking</span>
            <Card border="0" className="shadow-sm h-auto mt-3">
              <Card.Body>
                <div className="d-flex flex-column row-gap-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <strong>Tanggal Booking</strong>
                    {bookingDate ? bookingDate : "-"}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <strong>Waktu Booking</strong>
                    {bookingTime ? bookingTime : "-"}
                  </div>
                  {service?.data?.category_id.name !== "Smartphone" && (
                    <div className="d-flex align-items-center justify-content-between">
                      <strong>Membawa Tangga</strong>
                      {selectedBringLadder === "true" ? "Yes" : "No"}
                    </div>
                  )}
                  <div className="d-flex align-items-center justify-content-between">
                    <strong>Metode Pembayaran</strong>
                    {selectedPayment ? selectedPayment.name : "-"}
                  </div>
                </div>

                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Sub Total</strong>
                  {service?.data ? (
                    <NumericFormat
                      value={service.data.price}
                      displayType="text"
                      prefix="Rp "
                      thousandSeparator={"."}
                      decimalSeparator=","
                    />
                  ) : (
                    0
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Biaya Aplikasi</strong>
                  {service?.data ? (
                    <NumericFormat
                      value={APP_FEE}
                      displayType="text"
                      prefix="Rp "
                      thousandSeparator={"."}
                      decimalSeparator=","
                    />
                  ) : (
                    0
                  )}
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Total</strong>
                  {service?.data ? (
                    <NumericFormat
                      value={service.data.price + APP_FEE}
                      displayType="text"
                      prefix="Rp "
                      thousandSeparator={"."}
                      decimalSeparator=","
                      className="fw-bold fs-5"
                    />
                  ) : (
                    0
                  )}
                </div>
                {/* button */}
                <div className="d-flex flex-column justify-content-end gap-3 mt-4">
                  <ActionButton
                    disabled={isPending}
                    type={"submit"}
                    text={"Booking"}
                  />
                  <Link
                    to={`/detail/${idMitra}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ActionButtonOutline
                      disabled={isPending}
                      type={"button"}
                      text={"Cancel"}
                      className="h-100 w-100"
                    />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
