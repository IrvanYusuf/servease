import React, { useEffect, useState } from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import { apiTransaction } from "../../api/apiTransaction";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/authContext";
const SectionBerlangsung = () => {
  const { token } = useAuth();
  const [allTransactionOnGoing, setAllTransactionOnGoing] = useState([]);
  const decoded = token ? jwtDecode(token) : null;

  const getAllTransaction = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/${decoded.id}/Berlangsung`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
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
              backgroundColor={"rgba(79, 80, 233, 0.23)"}
              color={"#4f50e9"}
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

export default SectionBerlangsung;
