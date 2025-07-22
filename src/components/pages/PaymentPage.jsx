import BookingsServices from "@/services/booking.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { useState } from "react";
import { copyToClipboard } from "@/utils/text";
import { NumericFormat } from "react-number-format";
import Countdown from "react-countdown";
import { formatDate } from "@/utils/formattedDate";
import LabelInput from "../atoms/LabelInput";
import ActionButton from "../atoms/ActionButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadPaymentProof } from "@/schema/booking.schema";
import { swal } from "@/utils/sweetAlert";

const PaymentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [copyNoAccount, setCopyNoAccount] = useState(false);
  const [copyAmount, setCopyAmount] = useState(false);
  const booking_id = searchParams.get("booking_id");

  const handleCopyNoAccount = (payload) => {
    copyToClipboard(payload);
    setCopyNoAccount(true);
    setTimeout(() => {
      setCopyNoAccount(false);
    }, 1500);
  };
  const handleCopyAmount = (payload) => {
    copyToClipboard(payload);
    setCopyAmount(true);
    setTimeout(() => {
      setCopyAmount(false);
    }, 1500);
  };

  const { data: dataPayment, isLoading } = useQuery({
    queryKey: ["booking", booking_id],
    queryFn: () => BookingsServices.getDetailBooking(booking_id),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(uploadPaymentProof),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ bookingId, formData }) =>
      BookingsServices.uploadPaymentProof(bookingId, formData),
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      reset();
    },
    onError: (error) => {
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("payment_proof", file);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("payment_proof", data.payment_proof);

    mutate({ bookingId: booking_id, formData });
  };

  return (
    <div className="container w-100">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h4 className="text-center">
          Silahkan lakukan pembayaran dengan detail sebagai berikut
        </h4>
        <div className="row w-100 justify-content-center mt-4">
          <div className="col-lg-9 col-12 px-0">
            <Card className="w-100 shadow-sm">
              <Card.Body className="p-lg-5">
                <div className="d-flex column-gap-3 align-items-center">
                  <img
                    src={dataPayment?.data?.payment_method_id.bank_logo}
                    style={{ width: "120px" }}
                    alt=""
                  />
                  <span className="fs-5 fw-bold">
                    {dataPayment?.data?.payment_method_id.name}
                  </span>
                </div>
                <div className="mt-4 fs-5">
                  <span>No. Virtual Account</span>
                  <div className="bg-body-secondary px-3 py-4 mt-3 rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ letterSpacing: "0.2em" }}>
                        {dataPayment?.data?.payment_method_id.account_number}
                      </span>
                      <ActionButtonOutline
                        text={copyNoAccount ? "Disalin!" : "Salin"}
                        onClick={() =>
                          handleCopyNoAccount(
                            dataPayment?.data?.payment_method_id.account_number
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 fs-5">
                  <span>Nominal Transfer</span>
                  <div className="bg-body-secondary px-3 py-4 mt-3 rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <NumericFormat
                        value={dataPayment?.data?.total_price || 0}
                        displayType="text"
                        prefix="Rp "
                        thousandSeparator={"."}
                        decimalSeparator=","
                      />
                      <ActionButtonOutline
                        text={copyAmount ? "Disalin!" : "Salin"}
                        onClick={() =>
                          handleCopyAmount(dataPayment?.data?.total_price)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-secondary-emphasis">
                  <span className="text-secondary-emphasis">Id Transaksi</span>
                  <div>
                    <span className="text-secondary-emphasis">
                      #{dataPayment?.data?._id}
                    </span>
                  </div>
                </div>
                <div className="mt-4 fs-5 d-flex justify-content-center flex-column align-items-center">
                  <span>Batas Pembayaran</span>
                  {dataPayment?.data?.payment_due ? (
                    <div className="fw-semibold fs-1">
                      <Countdown
                        date={dataPayment?.data?.payment_due}
                        renderer={(props) =>
                          renderer(props, dataPayment?.data?.payment_status)
                        }
                      />
                    </div>
                  ) : (
                    "menunggu...."
                  )}
                  <div>
                    <span>
                      {formatDate({ date: dataPayment?.data?.payment_due })}
                    </span>
                  </div>
                </div>
                {dataPayment?.data?.payment_status === "unpaid" && (
                  <div className="mt-4">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      className="needs-validation"
                      encType="multipart/form-data"
                    >
                      <LabelInput
                        target={"payment_proof"}
                        labelText={"Bukti Pembayaran"}
                      />
                      <span className="text-danger"> *</span>
                      <input
                        className={`form-control ${
                          errors.payment_proof ? "is-invalid" : ""
                        }`}
                        type="file"
                        accept="image/jpeg, image/png, application/pdf"
                        onChange={handleImageChange}
                      />
                      {errors.payment_proof && (
                        <div className="invalid-feedback">
                          {errors.payment_proof.message}
                        </div>
                      )}
                      <ActionButton
                        type="submit"
                        className="w-100 mt-3"
                        text={"Kirim"}
                        style={{ padding: "10px 12px" }}
                        disabled={isPending}
                      />
                    </form>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

const renderer = ({ hours, minutes, seconds, completed }, status) => {
  if (status === "paid") {
    return <span className="text-success fw-bold">Pembayaran Berhasil!</span>;
  }

  if (completed) {
    return <span className="text-danger fw-bold">Your payment expired!</span>;
  }

  return (
    <span>
      {hours}:{minutes}:{seconds}
    </span>
  );
};
