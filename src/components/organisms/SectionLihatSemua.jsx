import React, { useEffect, useState } from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiTransaction } from "../../api/apiTransaction";

const SectionLihatSemua = () => {
  const { token } = useAuth();
  const [allTransaction, setAllTransaction] = useState([]);
  // const [idTransaksi,setIdTransaksi] = useState(0)
  const decoded = token ? jwtDecode(token) : null;

  const getAllTransaction = async () => {
    try {
      const response = await fetch(`${apiTransaction}/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      setAllTransaction(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (decoded.id) {
      getAllTransaction();
    }
  }, [decoded.id]);
  return (
    // {}
    <div className="d-flex flex-column align-items-center">
      {allTransaction &&
        allTransaction.map((transaction) => (
          <CardHistoryBooking
            backgroundColor={
              transaction.status === "Baru"
                ? "rgba(239,61,1,0.2)"
                : transaction.status === "Berlangsung"
                ? "rgba(79, 80, 233, 0.23)"
                : transaction.status === "Selesai"
                ? "rgba(80, 141, 105, 0.23)"
                : "rgba(179,19,18,0.23"
            }
            // backgroundColor={"rgba(79, 80, 233, 0.23)"}
            color={
              transaction.status === "Baru"
                ? "#EF3D01"
                : transaction.status === "Berlangsung"
                ? "#4f50e9"
                : transaction.status === "Selesai"
                ? "#508D69"
                : "#B31312"
            }
            textStatus={transaction.status}
            kodePemesanan={transaction.kode_pemesanan}
            namaMitra={transaction.nama_servis}
            kategori={transaction.nama_kategori}
            idTransaksi={transaction.id_transaksi}
            idMitra={transaction.id_mitra}
          />
        ))}
    </div>
  );
};

export default SectionLihatSemua;
