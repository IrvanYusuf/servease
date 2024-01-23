import React, { useState, useEffect } from "react";
import CardUlasan from "../molecules/CardUlasan";
import "../../styles/organisms/cardUlasan.css";
import { apiRating } from "../../api/apiRating";

const SectionCardUlasan = ({ idMitra }) => {
  const [serviceRatings, setServiceRatings] = useState([]);
  const [userRatings, setUserRatings] = useState([]);
  const getServiceRatings = async () => {
    try {
      const response = await fetch(`${apiRating}/mitra/diulas/${idMitra}`, {
        method: "GET",
      });
      const dataServiceRatings = await response.json();
      console.log(dataServiceRatings.data);
      setServiceRatings(dataServiceRatings.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getServiceRatings();
  }, [idMitra]);
  return (
    <div className="ulasan-container">
      <h2>Ulasan</h2>
      <div className="card-ulasan-container">
        {serviceRatings.length > 0 ? (
          serviceRatings.map((dataRatingUlasan, i) => (
            <CardUlasan
              key={i}
              reviewText={dataRatingUlasan.deskripsi}
              reviewImgUser={dataRatingUlasan.img}
              nama={dataRatingUlasan.nama}
              star={dataRatingUlasan.rate}
            />
          ))
        ) : (
          <h6>Belum Ada Review</h6>
        )}
      </div>
    </div>
  );
};

export default SectionCardUlasan;
