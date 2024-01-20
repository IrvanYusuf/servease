import React, { useState } from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
// import Swal from "sweetalert2";
import { swal } from "../../../utils/sweetAlert";
import ButtonLink from "../../atoms/ButtonLink";

const DetailOrderMitra = () => {
  const [status, setStatus] = useState("Berlangsung");

  console.log(status);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div>
        <h4>Detail Order</h4>
      </div>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Status</td>
            <td className="p-2">
              {status === "Baru" ? (
                <StatusTransaksi
                  textStatus={"Baru"}
                  backgroundColor={"rgba(239,61,1,0.2)"}
                  color={"#EF3D01"}
                />
              ) : (
                <StatusTransaksi
                  textStatus={"Berlangsung"}
                  backgroundColor={"rgba(79, 80, 233, 0.23)"}
                  color={"#4f50e9"}
                />
              )}
            </td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">No. Transaksi</td>
            <td className="fw-bold p-2">AJH98YG</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Tanggal Booking</td>
            <td className="p-2">25 Desember 2023, 10:25 WIB</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Nama Customer</td>
            <td className="p-2">M Agus Salim</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">No Telp</td>
            <td className="p-2">087890807099</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Alamat</td>
            <td className="p-2 text-end" width={"30%"}>
              Jalan Jangka No.25, Sei Putih Barat Kec, Medan Petisah
            </td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Jenis Properti</td>
            <td className="p-2">Apartemen</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Masalah</td>
            <td className="p-2">AC Rusak</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Perlu Membawa Tangga</td>
            <td className="p-2">YA</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Deskripsi Masalah</td>
            <td className="p-2 text-end" width={"40%"}>
              ac berisik keluar suara gitar sama suling prindapan kadang kadang
              kaya suara rx king lagi balapan sama vespa lama, bocor juga keluar
              dana bansos
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      {status === "Baru" ? (
        <div className="d-flex justify-content-end column-gap-3">
          <div>
            <ActionButton
              text={"Terima"}
              onClick={() =>
                swal({
                  title: "Success",
                  text: "Data Berhasil Diubah",
                  icon: "success",
                  iconColor: "#EF3D01",
                  confirmButtonText: "Tutup",
                })
              }
            />
          </div>
          <div>
            <ActionButtonOutline text={"Tolak"} />
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          <div>
            <ButtonLink path={""} text={"Buat Invoice"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailOrderMitra;
