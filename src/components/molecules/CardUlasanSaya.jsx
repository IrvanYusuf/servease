import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import { Link } from "react-router-dom";
import ModalMenungguUlasan from "./ModalMenungguUlasan";
import { FaStar } from "react-icons/fa6";
import { limitOrderNumber } from "../../utils/text";
import StarRating from "../atoms/StarRating";

const CardUlasanSaya = ({
  kodePemesanan,
  image,
  deskripsi,
  namaServis,
  tanggal,
  kategori,
  rate,
}) => {
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
                Kode Pemesanan <b>{limitOrderNumber(kodePemesanan)}</b>
              </span>
            </div>
            <div className="d-flex gap-3 mt-3">
              <img
                src={`http://localhost:3000/images/${image}`}
                alt=""
                className="rounded-3"
                width={"80px"}
              />
              <div>
                <b>{namaServis}</b>
                <h6>{kategori}</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3" style={{ border: "1px dashed" }} />
        <div className="">
          <div style={{ width: "80px" }}></div>
          <div className="d-flex column-gap-1 align-items-center">
            <StarRating stars={rate} />
            <span className="ms-1">{tanggal}</span>
          </div>
          <p>{deskripsi}</p>
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
