import React, { useEffect, useState } from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import CardBookingMenungguUlasan from "../molecules/CardBookingMenungguUlasan";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiRating } from "../../api/apiRating";

const SectionMenungguDiulas = () => {
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [allRating, setAllRating] = useState([]);
  const getAllRatingByIdUser = async () => {
    try {
      const response = await fetch(`${apiRating}/user/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      setAllRating(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRatingByIdUser();
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      {allRating.length > 0 ? (
        allRating.map((rating, i) => (
          <CardBookingMenungguUlasan
            key={i}
            kode_pemesanan={rating.kode_pemesanan}
            namaServis={rating.nama_servis}
            kategori={rating.nama_kategori}
            image={rating.image}
            idTransaksi={rating.id_transaksi}
            idMitra={rating.id_mitra}
            idUser={decoded.id}
          />
        ))
      ) : (
        <div
          className="w-100 d-flex justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div className="d-flex flex-column align-items-center row-gap-3">
            <img src={iconRiwayatPemesananNotFound} alt="" />
            <h5>Kamu belum pernah melakukan pesanan</h5>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default SectionMenungguDiulas;
