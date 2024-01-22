import React, { useState } from "react";
import ActionButton from "../atoms/ActionButton";
import ModalMenungguUlasan from "./ModalMenungguUlasan";
import { limitOrderNumber } from "../../utils/text";

const CardBookingMenungguUlasan = ({
  kode_pemesanan,
  image,
  namaServis,
  kategori,
  idTransaksi,
  idMitra,
  idUser
}) => {
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
                Kode Pemesanan <b>{limitOrderNumber(kode_pemesanan)}</b>
              </span>
            </div>
            <div className="d-flex gap-3 mt-3">
              <img
                src={`http://localhost:3000/images/${image}`}
                alt=""
                className="rounded-3"
                width={"100px"}
                height={"80px"}
              />
              <div>
                <b>{namaServis}</b>
                <h6>{kategori}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column justify-content-end align-items-end w-100 h-100">
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
        idTransaksi={idTransaksi}
        idMitra={idMitra}
        idUser={idUser}
      />
    </div>
  );
};

export default CardBookingMenungguUlasan;
