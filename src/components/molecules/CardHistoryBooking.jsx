import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ModalBookingDetail from "./ModalBookingDetail";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import StatusTransaksi from "../atoms/StatusTransaksi";
import { limitOrderNumber } from "../../utils/text";
import { apiTransaction } from "../../api/apiTransaction";
import { useAuth } from "../../context/authContext";
import { swal } from "../../utils/sweetAlert";

const CardHistoryBooking = ({
  backgroundColor,
  color,
  textStatus,
  kodePemesanan,
  namaMitra,
  kategori,
  idTransaksi,
  idMitra,
}) => {
  const [showModalBookingDetail, setShowModalBookingDetail] = useState(false);
  const [idTransaksiModal, setIdTransaksiModal] = useState(0);
  const { token } = useAuth();

  function handleShowModalBookingDetail() {
    setShowModalBookingDetail(true);
    setIdTransaksiModal(idTransaksi);
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
  // console.log(valuebtn);
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-6">
          <div>
            <div className="d-flex column-gap-3">
              <span>
                Kode Pemesanan{" "}
                <b>{kodePemesanan && limitOrderNumber(kodePemesanan)}</b>
              </span>
              <div>
                <StatusTransaksi
                  backgroundColor={backgroundColor}
                  color={color}
                  textStatus={textStatus}
                />
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
        <div className="col-6 d-flex align-items-end">
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
                <ButtonLink
                  path={`https://wa.me/447471667916`}
                  text={"Hubungi Penjual"}
                  target={"_blank"}
                />
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
