import { Modal } from "react-bootstrap";
import ActionButton from "../atoms/ActionButton";
import { useState } from "react";
import ModalUlasan from "./ModalMenungguUlasan";

const ModalBookingDetail = (props) => {
  const { status, nilai } = props;
  console.log(props);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3 className="px-5">Detail Transaksi {nilai}</h3>
        <hr />
        <div className="mt-3 px-5">
          <div className="d-flex justify-content-between">
            <h6>No.Invoice</h6>
            <h6>{status !== "Selesai" ? "-" : "KALJN90"}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>No.Transaksi</h6>
            <h6>AJH98YG</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Tanggal Booking</h6>
            <h6>25 Desember 2023, 10:25 WIB</h6>
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
                <b>Agus Cleaning jr</b>
                <h6>Service Ac</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-end flex-column">
                <h6>Total Harga</h6>
                <h6>{status !== "Selesai" ? "-" : "Rp300.000"}</h6>
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
                  <td className="fw-bold">Bambang Sarep</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary">Alamat</td>
                  <td className="pe-3">:</td>
                  <td className="fw-bold">Rumah</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">6282233456789</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">Jl.jalan-jalan, Gg.gang-gang</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">Rumah warna merah logo banteng</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">Kota Medan, Medan Helvetia</td>
                </tr>
                <tr>
                  <td className="pe-3 fw-semibold text-secondary"></td>
                  <td className="pe-3"></td>
                  <td className="fw-normal">Sumatera Utara</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <hr style={{ border: "1px dashed" }} />
        <h3 className="px-5">Rincian Pembayaran</h3>
        <div className="mt-3 d-flex px-5 justify-content-between">
          <h6>Total Harga</h6>
          <h6>{status !== "Selesai" ? "-" : "Rp300.000"}</h6>
        </div>
        <div className="my-3 px-5">
          <ActionButton
            text={"Beri Ulasan"}
            disabledClass={status === "Selesai" ? "" : "disabled"}
            disabled={status === "Selesai" ? false : true}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBookingDetail;
