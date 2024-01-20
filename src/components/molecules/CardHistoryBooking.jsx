import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ModalBookingDetail from "./ModalBookingDetail";
import ButtonLink from "../atoms/ButtonLink";
import { Link } from "react-router-dom";
import StatusTransaksi from "../atoms/StatusTransaksi";

const CardHistoryBooking = ({ backgroundColor, color, textStatus, nilai }) => {
  const [showModalBookingDetail, setShowModalBookingDetail] = useState(false);
  const [valuebtn, setValueBtn] = useState(`gagal transaksi ${nilai}`);

  function handleShowModalBookingDetail() {
    setShowModalBookingDetail(true);
  }
  function handleCloseModalBookingDetail() {
    setShowModalBookingDetail(false);
  }

  const handleClick = () => {
    alert(valuebtn);
  };
  // console.log(valuebtn);
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-6">
          <div>
            <div className="d-flex column-gap-3">
              <span>
                Kode Pemesanan <b>JJAI98654</b>
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
                <b>Agus Cleaning jr</b>
                <h6>Service Ac</h6>
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
              {textStatus === "Selesai" ? (
                <p>hhh</p>
              ) : (
                <div>
                  <ButtonLink
                    path={`https://wa.me/447471667916`}
                    text={"Hubungi Penjual"}
                    target={"_blank"}
                  />
                </div>
              )}
              {textStatus === "Berlangsung" ? (
                <button
                  className="btn border-secondary rounded-3"
                  value={valuebtn}
                  onClick={handleClick}
                >
                  Batalkan
                </button>
              ) : (
                <Link
                  to={"/detail/1"}
                  className="btn border-secondary rounded-3"
                >
                  Booking Lagi
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalBookingDetail
        show={showModalBookingDetail}
        onHide={handleCloseModalBookingDetail}
        status={textStatus}
        nilai={nilai}
      />
    </div>
  );
};

export default CardHistoryBooking;
