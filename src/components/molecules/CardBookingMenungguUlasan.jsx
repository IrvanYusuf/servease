import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import { Link } from "react-router-dom";
import ModalMenungguUlasan from "./ModalMenungguUlasan";

const CardBookingMenungguUlasan = () => {
  const [showModalUlasam, setShowModalUlasan] = useState(false);

  function handleShowModalUlasan() {
    setShowModalUlasan(true);
  }
  function handleCloseModalUlasan() {
    setShowModalUlasan(false);
  }
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-6">
          <div>
            <div className="d-flex column-gap-3">
              <span>
                Kode Pemesanan <b>JJAI98654</b>
              </span>
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
              <button className="btn p-0" onClick={handleShowModalUlasan}>
                <b style={{ color: "#EF3D01", fontSize: "13px" }}>
                  Lihat Detail Ulasan
                </b>
              </button>
            </div>
            <div className="d-flex column-gap-3 align-items-center">
              <ActionButton
                text={"Beri Ulasan"}
                onClick={handleShowModalUlasan}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalMenungguUlasan
        show={showModalUlasam}
        onHide={handleCloseModalUlasan}
      />
    </div>
  );
};

export default CardBookingMenungguUlasan;
