import { Modal } from "react-bootstrap";
import ActionButton from "@/components/atoms/ActionButton";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";
import { formatDate } from "@/utils/formattedDate";
import { NumericFormat } from "react-number-format";
import StatusTransaksi from "../atoms/StatusTransaksi";
import { formatPaymentType } from "@/utils/formatPaymentType";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import StatusPembayaran from "../atoms/StatusPembayaran";
import { swal } from "@/utils/sweetAlert";
import queryClient from "@/utils/queryClient";

const ModalBookingDetail = (props) => {
  const { idTransaksi } = props;
  const navigate = useNavigate();

  const handleNavigate = ({ path = "" }) => {
    navigate(path);
  };

  const { data: dataBooking, isLoading } = useQuery({
    queryKey: ["booking", idTransaksi],
    queryFn: () => BookingsServices.getDetailBooking(idTransaksi),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: BookingsServices.completeBooking,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["booking", idTransaksi]);
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
    },
    onError: (error) => {
      console.error(error);
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const handleCompleteBooking = async (id) => {
    swal({
      title: "Complete this booking?",
      text: "Are you sure the service has been completed?",
      icon: "warning",
      confirmButtonText: "Yes, mark as completed",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  };

  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3 className="px-lg-5 px-2">Detail Transaksi</h3>
        <hr />
        <div className="mt-3 px-lg-5 d-flex flex-column row-gap-2 px-2">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h6>No.Booking</h6>
            <h6>#{dataBooking?.data?._id}</h6>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <h6>Tanggal Booking</h6>
            <h6>
              {formatDate({ date: dataBooking?.data?.createdAt || "" })} WIB
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Status Booking</h6>
            <div>
              <StatusTransaksi
                textStatus={dataBooking?.data?.status.toUpperCase() || ""}
                className="w-auto d-inline-block"
              />
            </div>
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        {/* detail booking */}
        <div>
          <h3 className="px-lg-5 px-2">Detail Booking</h3>
          <div className="mt-3 px-lg-5 px-2">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 d-flex flex-lg-row flex-column column-gap-3">
                <img
                  src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
                  alt=""
                  className="rounded-3 d-none d-lg-inline-block"
                  width={"120px"}
                />
                <img
                  src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
                  alt=""
                  className="rounded-3 d-inline-block d-lg-none w-100"
                />
                <div>
                  <span
                    className="text-secondary fw-bold"
                    style={{ fontSize: "13px" }}
                  >
                    {dataBooking?.data?.partner_id.name}
                  </span>
                  <h5>{dataBooking?.data?.service_id.name}</h5>
                  <span
                    className="text-secondary fw-bold"
                    style={{ fontSize: "13px" }}
                  >
                    {dataBooking?.data?.service_id.category_id.name}
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-12 d-none d-lg-grid">
                <div className="d-flex mb-3 align-items-end flex-column">
                  <h6>Total Harga</h6>
                  <h6>
                    {
                      <NumericFormat
                        value={dataBooking?.data?.total_price || 0}
                        displayType="text"
                        prefix="Rp "
                        thousandSeparator={"."}
                        decimalSeparator=","
                      />
                    }
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <table>
                <thead>
                  <tr>
                    <td className="pe-3 fw-semibold text-secondary">
                      Nama Customer
                    </td>
                    <td className="pe-3">:</td>
                    <td className="fw-bold">
                      {dataBooking?.data?.user_id.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-3 fw-semibold text-secondary">Alamat</td>
                    <td className="pe-3">:</td>
                    <td className="fw-bold">
                      {dataBooking?.data?.address_id.street_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-3 fw-semibold text-secondary">No Telp</td>
                    <td className="pe-3">:</td>
                    <td className="fw-bold">
                      {dataBooking?.data?.user_id.phone}
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        {/* rincian pembayaran */}
        <div>
          <h3 className="px-lg-5 px-2">Rincian Pembayaran</h3>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h6>Status Pembayaran</h6>
            <h6>
              {
                <StatusPembayaran
                  textStatus={dataBooking?.data?.payment_status.toUpperCase()}
                />
              }
            </h6>
          </div>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h6>Sub Total</h6>
            <h6>
              {
                <NumericFormat
                  value={dataBooking?.data?.sub_total || 0}
                  displayType="text"
                  prefix="Rp "
                  thousandSeparator={"."}
                  decimalSeparator=","
                />
              }
            </h6>
          </div>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h6>Biaya Aplikasi</h6>
            <h6>
              {
                <NumericFormat
                  value={dataBooking?.data?.app_cost || 0}
                  displayType="text"
                  prefix="Rp "
                  thousandSeparator={"."}
                  decimalSeparator=","
                />
              }
            </h6>
          </div>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h6>Jenis Pembayaran</h6>
            <h6>
              {formatPaymentType({
                type: dataBooking?.data?.payment_method_id.type || "-",
              })}
            </h6>
          </div>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h6>Nama Bank</h6>
            <h6>{dataBooking?.data?.payment_method_id.name || "-"}</h6>
          </div>
          <div className="mt-3 d-flex px-lg-5 px-2 justify-content-between">
            <h5>Total Harga</h5>
            <NumericFormat
              value={dataBooking?.data?.total_price || 0}
              displayType="text"
              prefix="Rp "
              thousandSeparator={"."}
              decimalSeparator=","
              className="fs-5 fw-bold"
            />
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        <div className="my-4 px-lg-5 px-2 column-gap-3 d-flex justify-content-end">
          <ActionButtonOutline text={"Tutup"} onClick={props.onHide} />
          {dataBooking?.data?.payment_status === "unpaid" ? (
            <ActionButton
              text={"Bayar Sekarang"}
              onClick={() =>
                handleNavigate({
                  path: `/payment?booking_id=${dataBooking?.data._id}`,
                })
              }
            />
          ) : dataBooking?.data?.status === "confirmed" &&
            dataBooking?.data?.status !== "cancelled" ? (
            <ActionButton
              text={"Selesaikan"}
              type={"button"}
              onClick={() => handleCompleteBooking(dataBooking?.data?._id)}
            />
          ) : (
            <ActionButton
              text={"Beri Ulasan"}
              type={"button"}
              onClick={() => handleNavigate({ path: "/" })}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBookingDetail;
