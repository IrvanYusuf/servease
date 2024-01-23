import React, { useEffect, useState } from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
// import Swal from "sweetalert2";
import { swal } from "../../../utils/sweetAlert";
import ButtonLink from "../../atoms/ButtonLink";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiTransaction } from "../../../api/apiTransaction";
import { useParams } from "react-router-dom";

const DetailOrderMitra = () => {
  const { idTransaksi } = useParams();
  const { token, idMitra } = useAuth();
  const [allTransaction, setAllTransaction] = useState([]);
  const [waktuImageDiubah, setWaktuImageDiubah] = useState([]);
  const [keluhan, setKeluhan] = useState([]);
  const [invoiceDetail, setInvoiceDetail] = useState({});

  const getAllTransactionMitra = async () => {
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
      const keluhan = JSON.parse(result.keluhan);
      const keluhanStr = keluhan.join(",");
      setKeluhan(keluhanStr);
      console.log(result);
      const originalDate = result.tanggal_layanan;
      const dateObject = new Date(originalDate);

      // Format the date as YYYY-MM-DD
      const formattedDate = dateObject.toISOString().split("T")[0];
      // Combine date and time
      const formattedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;
      const formattedDateWithTime = `${formattedDate}, ${formattedTime}`;
      setWaktuImageDiubah(formattedDateWithTime);
      setAllTransaction(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getInvoiceDetail = async () => {
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
      console.log(data);
      setInvoiceDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(invoiceDetail);

  const handleConfirmTransaction = async () => {
    try {
      const response = await fetch(`${apiTransaction}/confirm/${idTransaksi}`, {
        method: "PATCH",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      console.log(data);
      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTransactionMitra();
    getInvoiceDetail();
  }, []);

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
              {allTransaction.status === "Baru" ? (
                <StatusTransaksi
                  textStatus={"Baru"}
                  backgroundColor={"rgba(239,61,1,0.2)"}
                  color={"#EF3D01"}
                />
              ) : allTransaction.status === "Berlangsung" ? (
                <StatusTransaksi
                  textStatus={"Berlangsung"}
                  backgroundColor={"rgba(79, 80, 233, 0.23)"}
                  color={"#4f50e9"}
                />
              ) : allTransaction.status === "Selesai" ? (
                <StatusTransaksi
                  textStatus={"Selesai"}
                  backgroundColor={"rgba(80, 141, 105, 0.23)"}
                  color={"#508D69"}
                />
              ) : (
                <StatusTransaksi
                  textStatus={"Dibatalkan"}
                  backgroundColor={"rgba(179,19,18,0.23"}
                  color={"#B31312"}
                />
              )}
            </td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">No. Transaksi</td>
            <td className="fw-bold p-2">{allTransaction.kode_pemesanan}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Tanggal Booking</td>
            <td className="p-2">{waktuImageDiubah} WIB</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Nama Customer</td>
            <td className="p-2">{allTransaction.nama_customer}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">No Telp</td>
            <td className="p-2">{allTransaction.no_telp}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Alamat</td>
            <td className="p-2 text-end" width={"30%"}>
              {allTransaction.nama_jalan}, {allTransaction.kabupaten},{" "}
              {allTransaction.kecamatan}
            </td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Jenis Properti</td>
            <td className="p-2">{allTransaction.jenis_properti}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Masalah</td>
            <td className="p-2">{keluhan}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Perlu Membawa Tangga</td>
            <td className="p-2">{allTransaction.tangga}</td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Deskripsi Masalah</td>
            <td className="p-2 text-end" width={"40%"}>
              {allTransaction.deskripsi_masalah
                ? allTransaction.deskripsi_masalah
                : "-"}
            </td>
          </tr>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Total Harga</td>
            <td className="p-2 text-end" width={"40%"}>
              Rp
              {allTransaction.status === "Selesai"
                ? invoiceDetail[0].total_tagihan
                  ? invoiceDetail[0].total_tagihan
                  : "-"
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      {allTransaction.status === "Baru" ? (
        <div className="d-flex justify-content-end column-gap-3">
          <div>
            <ActionButton text={"Terima"} onClick={handleConfirmTransaction} />
          </div>
          <div>
            <ActionButtonOutline text={"Tolak"} />
          </div>
        </div>
      ) : allTransaction.status === "Berlangsung" ? (
        <div className="d-flex justify-content-end">
          <div>
            <ButtonLink
              path={`/mitra/transaksi-invoice/${allTransaction.id_transaksi}`}
              text={"Buat Invoice"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailOrderMitra;
