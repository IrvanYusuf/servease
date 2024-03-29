import React, { useEffect, useState } from "react";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import { apiTransaction } from "../../api/apiTransaction";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
const SectionSelesai = () => {
  const { token } = useAuth();
  const [allTransactionOnGoing, setAllTransactionOnGoing] = useState([]);
  const decoded = token ? jwtDecode(token) : null;

  const getAllTransaction = async () => {
    try {
      const response = await fetch(`${apiTransaction}/${decoded.id}/Selesai`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      console.log(data);
      setAllTransactionOnGoing(data);
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
        {allTransactionOnGoing &&
          allTransactionOnGoing.map((transaction) => (
            <CardHistoryBooking
              backgroundColor={"rgba(80, 141, 105, 0.23)"}
              color={"#508D69"}
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

export default SectionSelesai;
