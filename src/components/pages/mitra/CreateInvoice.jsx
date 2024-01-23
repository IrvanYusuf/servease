import React, { useEffect, useState } from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { useAuth } from "../../../context/authContext";
import { apiTransaction } from "../../../api/apiTransaction";
import { useParams } from "react-router-dom";
import ModalInputTotalTagihan from "../../molecules/mitra/ModalInputTotalTagihan";

const CreateInvoice = () => {
  const { idTransaksi } = useParams();
  const { token, idMitra } = useAuth();
  const [allTransaction, setAllTransaction] = useState([]);
  const [waktuImageDiubah, setWaktuImageDiubah] = useState([]);
  const [keluhan, setKeluhan] = useState([]);
  const [showModalTotalTagihan, setShowModalTotalTagihan] = useState(false);
  const [showModalEditTotalTagihan, setShowModalEditTotalTagihan] =
    useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState({});
  const [totalTagihan, setTotalTagihan] = useState("");
  const [isInvoiceSuccess, setIsInvoiceSuccess] = useState(false);

  const handleShowModalTotalTagihan = () => {
    setShowModalTotalTagihan(true);
  };

  const getDetailTransactionMitra = async () => {
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

  const changeStatusFinish = async () => {
    try {
      const response = await fetch(`${apiTransaction}/finish/${idTransaksi}`, {
        method: "PATCH",
        headers: {
          authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createInvoice = async () => {
    const newObj = { total_tagihan: totalTagihan };
    const response = await fetch(`${apiTransaction}/mitra/${idTransaksi}`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
    const data = await response.json();
    swal({
      title: "Success",
      text: "Data Berhasil Diubah",
      icon: "success",
      iconColor: "#EF3D01",
      confirmButtonText: "Tutup",
    });
    setIsInvoiceSuccess(true);
    changeStatusFinish();
    console.log(totalTagihan);
  };

  useEffect(() => {
    if (isInvoiceSuccess) {
      getInvoiceDetail();
      console.log("update");
    }
  }, [isInvoiceSuccess]);

  useEffect(() => {
    getDetailTransactionMitra();
    getInvoiceDetail();
  }, []);

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div>
        <h4>Buat Invoice</h4>
      </div>
      <hr />
      <table className="table table-borderless">
        <tbody>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">No. Invoice</td>
            <td className="p-2">
              {invoiceDetail.length > 0 ? invoiceDetail[0].kode_invoice : "-"}
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
      <div>
        <h4>Detail Order</h4>
      </div>
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
              {allTransaction.deskripsi}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <h4>Detail Tagihan</h4>
        </div>
        {invoiceDetail.length === 0 && (
          <div>
            <ActionButton
              text={"Input Nominal"}
              onClick={handleShowModalTotalTagihan}
            />
          </div>
        )}
      </div>
      <table className="table table-borderless">
        <tbody>
          <tr className="d-flex justify-content-between">
            <td className="text-secondary p-2">Total Tagihan</td>
            <td className="p-2">
              {invoiceDetail.length > 0 ? (
                invoiceDetail[0].total_tagihan ? (
                  <h5>Rp{invoiceDetail[0].total_tagihan}</h5>
                ) : (
                  "-"
                )
              ) : totalTagihan ? (
                <h5>Rp{totalTagihan}</h5>
              ) : (
                "-"
              )}
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
      ) : (
        <div className="d-flex justify-content-end">
          <div>
            <ActionButton text={"Buat Invoice"} onClick={createInvoice} />
          </div>
        </div>
      )}
      <ModalInputTotalTagihan
        show={showModalTotalTagihan}
        onHide={() => setShowModalTotalTagihan(false)}
        totalTagihan={totalTagihan} // Kirim state totalTagihan ke ModalInputTotalTagihan
        setTotalTagihan={setTotalTagihan}
      />
    </div>
  );
};

export default CreateInvoice;
