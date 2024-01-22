import { Modal } from "react-bootstrap";
import ActionButton from "../atoms/ActionButton";
import { useEffect, useState } from "react";
import ModalUlasan from "./ModalMenungguUlasan";
import { jwtDecode } from "jwt-decode";
import { apiTransaction } from "../../api/apiTransaction";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const ModalBookingDetail = (props) => {
  const { token } = useAuth();
  const { status, idTransaksi } = props;
  const [detailTransaction, setDetailTransaction] = useState({});
  const [TanggalBooking, setTanggalBooking] = useState("");
  const navigate = useNavigate();
  const [totalTagihan, setTotalTagihan] = useState(null);

  const getDetailInvoice = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/invoice/detail/${idTransaksi}`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      const [result] = data;
      setTotalTagihan(result.total_tagihan);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailTransaction = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/detail/transaction/${idTransaksi}`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );

      const { data } = await response.json();
      const [result] = data;
      const originalDate = result.created_at;
      const dateObject = new Date(originalDate);

      // Format the date as YYYY-MM-DD
      const formattedDate = dateObject.toISOString().split("T")[0];

      // Format the time as HH:MM:SS
      const formattedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;

      // Combine date and time
      const formattedDateWithTime = `${formattedDate}, ${formattedTime}`;
      setTanggalBooking(formattedDateWithTime);
      setDetailTransaction(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = () => {
    if (status === "Selesai") {
      navigate("/profile/ulasan");
    }
  };

  useEffect(() => {
    if (idTransaksi) {
      getDetailTransaction();
      getDetailInvoice();
    }
  }, [idTransaksi]);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3 className="px-5">Detail Transaksi</h3>
        <hr />
        <div className="mt-3 px-5">
          <div className="d-flex justify-content-between">
            <h6>No.Invoice</h6>
            <h6>{status !== "Selesai" ? "-" : "KALJN90"}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>No.Transaksi</h6>
            <h6>{detailTransaction.kode_pemesanan}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Tanggal Booking</h6>
            <h6>{TanggalBooking} WIB</h6>
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        <h3 className="px-5">Detail Booking</h3>
        <div className="mt-3 px-5">
          <div className="row align-items-center">
            <div className="col-6 d-flex column-gap-3">
              <img
                src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
                alt=""
                className="rounded-3"
                width={"80px"}
              />
              <div>
                <b>{detailTransaction.nama_servis}</b>
                <h6>{detailTransaction.nama_kategori}</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-end flex-column">
                <h6>Total Harga</h6>
                <h6>{totalTagihan ? `Rp${totalTagihan}` : "-"}</h6>
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
                  <td className="fw-bold">{detailTransaction.nama_customer}</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary">Alamat</td>
                  <td className="pe-3">:</td>
                  <td className="fw-bold">{detailTransaction.label_alamat}</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">{detailTransaction.no_telp}</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">{detailTransaction.nama_jalan}</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">{detailTransaction.deskripsi}</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">
                    {detailTransaction.kabupaten}, {detailTransaction.kecamatan}
                  </td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">{detailTransaction.provinsi}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        <h3 className="px-5">Rincian Pembayaran</h3>
        <div className="mt-3 d-flex px-5 justify-content-between">
          <h6>Total Harga</h6>
          <h6>{totalTagihan ? `Rp${totalTagihan}` : "-"}</h6>
        </div>
        <div className="my-3 px-5">
          <ActionButton
            text={"Beri Ulasan"}
            onClick={handleNavigate}
            disabledClass={status === "Selesai" ? "" : "disabled"}
            disabled={status === "Selesai" ? false : true}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBookingDetail;
