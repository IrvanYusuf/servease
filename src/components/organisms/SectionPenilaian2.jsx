import React, { useEffect, useState } from "react";
import "../../styles/organisms/sectionPenilaianSemua.css";
import { FaStar } from "react-icons/fa6";
import StarRating from "../atoms/StarRating";
import { limitOrderNumber } from "../../utils/text";
import { format } from "date-fns";
import { useAuth } from "../../context/authContext";
import { apiRating } from "../../api/apiRating";

const SectionPenilaian2 = () => {
  const { token } = useAuth();
  const idMitra = localStorage.getItem("idMitra");
  const [allRating, setAllRating] = useState([]);
  const getAllRatingByIdMitra = async () => {
    try {
      const response = await fetch(
        `${apiRating}/mitra/diulas/rate/${idMitra}/2`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      console.log(data);
      setAllRating(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRatingByIdMitra();
  }, []);
  return (
    <div className="d-flex flex-column h-100">
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Kode Pemesanan</th>
              <th scope="col">Rating</th>
              <th scope="col">Ulasan</th>
            </tr>
          </thead>
          <tbody>
            {allRating.map((rating, i) => (
              <tr>
                <th scope="row" className="text-secondary fw-medium">
                  {format(new Date(rating.created_at), "dd MMMM yyyy")}
                </th>
                <td className="text-secondary fw-medium">
                  {limitOrderNumber(rating.kode_pemesanan)}
                </td>
                <td>
                  <StarRating stars={rating.rate} />
                </td>
                <td className="text-truncate" style={{ maxWidth: "200px" }}>
                  {rating.deskripsi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionPenilaian2;
