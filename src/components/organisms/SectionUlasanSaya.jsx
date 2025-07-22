import React, { useEffect, useState } from "react";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";
import CardUlasanSaya from "../molecules/CardUlasanSaya";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiRating } from "../../api/apiRating";
import { subDays, formatDistance } from "date-fns";
import NotFoundSection from "./NotFoundSection";

const SectionUlasanSaya = () => {
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [allRating, setAllRating] = useState([]);
  const [tanggalRating, setTanggalRating] = useState("");
  const getAllRatingDiUlasByIdUser = async () => {
    try {
      const response = await fetch(`${apiRating}/user/diulas/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      const oneDayAgoData = data.map((item) => ({
        ...item,
        tanggal: formatDistance(
          subDays(new Date(item.created_at), 1),
          new Date(),
          { addSuffix: true }
        ),
      }));
      console.log(oneDayAgoData[0].rate);

      setAllRating(oneDayAgoData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRatingDiUlasByIdUser();
  }, []);
  return (
    // <div className="h-100 border">
    <div className="d-flex flex-column align-items-center">
      {allRating.length > 0 ? (
        allRating.map((rating, i) => (
          <CardUlasanSaya
            key={i}
            deskripsi={rating.deskripsi}
            image={rating.image}
            kategori={rating.nama_kategori}
            kodePemesanan={rating.kode_pemesanan}
            namaServis={rating.nama_servis}
            tanggal={rating.tanggal}
            rate={rating.rate}
          />
        ))
      ) : (
        <div className="mt-5">
          <NotFoundSection />
        </div>
      )}
    </div>
    // </div>
  );
};

export default SectionUlasanSaya;
