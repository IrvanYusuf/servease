import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import { Link } from "react-router-dom";
import ModalMenungguUlasan from "./ModalMenungguUlasan";
import { FaStar } from "react-icons/fa6";

const CardUlasanSaya = ({ status }) => {
  const [showModalUlasan, setShowModalUlasan] = useState(false);

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
            {status === "Selesai" ? (
              ""
            ) : (
              <div className="d-flex column-gap-3 align-items-center">
                <ActionButton
                  text={"Beri Ulasan"}
                  onClick={handleShowModalUlasan}
                />
              </div>
            )}
          </div>
        </div>
        <hr className="mt-3" style={{ border: "1px dashed" }} />
        <div className="">
          <div style={{ width: "80px" }}></div>
          <div className="d-flex column-gap-1 align-items-center">
            {Array.from({ length: 5 }, (v, i) => (
              <FaStar className="text-warning" />
            ))}
            <span className="ms-1">1 hari yang lalu</span>
          </div>
          <p>Bagus dan cepat, kerjanya bener tapi ngerokoknya banyak</p>
        </div>
      </div>
      <ModalMenungguUlasan
        show={showModalUlasan}
        onHide={handleCloseModalUlasan}
      />
    </div>
  );
};

export default CardUlasanSaya;
