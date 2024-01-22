import React, { useEffect, useState } from "react";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiTransaction } from "../../api/apiTransaction";
const SectionDibatalkan = () => {
  const { token } = useAuth();
  const [allTransactionCancel, setAllTransactionCancel] = useState([]);
  const decoded = token ? jwtDecode(token) : null;

  const getAllTransaction = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/${decoded.id}/dibatalkan`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      setAllTransactionCancel(data);
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
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {allTransactionCancel &&
          allTransactionCancel.map((transaction) => (
            <CardHistoryBooking
              backgroundColor={"rgba(179,19,18,0.23"}
              color={"#B31312"}
              textStatus={transaction.status}
              kodePemesanan={transaction.kode_pemesanan}
              namaMitra={transaction.nama_servis}
              kategori={transaction.nama_kategori}
              idTransaksi={transaction.id_transaksi}
              idMitra={transaction.id_mitra}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionDibatalkan;
