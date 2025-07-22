import { useState } from "react";
import ModalBookingDetail from "./ModalBookingDetail";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import StatusTransaksi from "../atoms/StatusTransaksi";
import { truncateText } from "../../utils/text";
import { apiTransaction } from "../../api/apiTransaction";
import { useAuth } from "../../context/authContext";
import { swal } from "../../utils/sweetAlert";
import ActionButton from "../atoms/ActionButton";
import ActionButtonOutline from "../atoms/ActionButtonOutline";

const CardHistoryBooking = ({
  textStatus,
  kodePemesanan,
  namaMitra,
  kategori,
  idTransaksi,
}) => {
  const [showModalBookingDetail, setShowModalBookingDetail] = useState(false);
  const { token } = useAuth();

  function handleShowModalBookingDetail() {
    setShowModalBookingDetail(true);
  }
  function handleCloseModalBookingDetail() {
    setShowModalBookingDetail(false);
  }

  const handleCancelTransaction = async () => {
    try {
      const response = await fetch(`${apiTransaction}/cancel/${idTransaksi}`, {
        method: "PATCH",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      console.log(data);
      if (data.affectedRows > 0) {
        swal({
          title: "Success",
          text: "Berhasil Membatalkan Pesanan",
          icon: "success",
          iconColor: "#EF3D01",
          confirmButtonText: "Tutup",
          //   timer: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div>
            <div className="d-flex flex-lg-row flex-column column-gap-3">
              <span>Kode Pemesanan </span>
              <div className="d-flex align-items-center column-gap-2">
                <b className="d-none d-md-flex">
                  #
                  {kodePemesanan &&
                    truncateText({ length: 30, text: kodePemesanan })}
                </b>
                <b className="d-flex d-md-none">
                  #
                  {kodePemesanan &&
                    truncateText({ length: 15, text: kodePemesanan })}
                </b>
                <StatusTransaksi textStatus={textStatus} />
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
              <img
                src="https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="
                alt=""
                className="rounded-3"
                width={"80px"}
              />
              <div>
                <b>{namaMitra}</b>
                <h6>{kategori}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none col-12 d-lg-flex align-items-end">
          <div className="d-flex flex-column justify-content-between align-items-end w-100 h-100">
            <div>
              <button
                className="btn p-0"
                onClick={handleShowModalBookingDetail}
              >
                <b style={{ color: "#EF3D01", fontSize: "13px" }}>
                  Lihat Detail Transaksi
                </b>
              </button>
            </div>
            <div className="d-flex column-gap-3 align-items-center">
              <div>
                <Link
                  to={`https://wa.me/909080`}
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <ActionButton text={"Hubungi Penjual"} />
                </Link>
              </div>
              {textStatus === "Berlangsung" && (
                <button
                  className="btn border-secondary rounded-3"
                  onClick={handleCancelTransaction}
                >
                  Batalkan
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4 d-lg-none col-12 d-flex align-items-end">
          <div className="d-flex row-gap-3 flex-column justify-content-between align-items-end w-100 h-100">
            <div className="w-100">
              <ActionButtonOutline
                className="w-100"
                onClick={handleShowModalBookingDetail}
                text={"Lihat Detail Transaksi"}
              />
            </div>
            <div className="d-flex w-100 column-gap-3 align-items-center">
              <div className="w-100">
                <Link
                  to={`https://wa.me/909080`}
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <ActionButton text={"Hubungi Penjual"} className="w-100" />
                </Link>
              </div>
              {textStatus === "Berlangsung" && (
                <button
                  className="btn border-secondary rounded-3"
                  onClick={handleCancelTransaction}
                >
                  Batalkan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalBookingDetail
        show={showModalBookingDetail}
        onHide={handleCloseModalBookingDetail}
        status={textStatus}
        idTransaksi={idTransaksi}
      />
    </div>
  );
};

export default CardHistoryBooking;
