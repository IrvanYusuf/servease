import React, { useState, useEffect } from "react";
import CardUlasan from "../molecules/CardUlasan";
import "../../styles/organisms/cardUlasan.css";

const SectionCardUlasan = ({ service_id }) => {
  const [serviceRatings, setServiceRatings] = useState([]);
  const [userRatings, setUserRatings] = useState([]);
  const getServiceRatings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3004/ratings?service_id=${service_id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const dataServiceRatings = await response.json();
      setServiceRatings(dataServiceRatings);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserRatings = async () => {
    try {
      const response = await fetch("http://localhost:3005/users", {
        method: "GET",
      });
      const dataUserRatings = await response.json();
      setUserRatings(dataUserRatings);
    } catch (error) {
      console.log(error.message);
    }
  };

  const mergedData = serviceRatings.map((rating) => ({
    ...rating,
    user: userRatings.filter((user) => user.id === rating.user_id),
  }));

  useEffect(() => {
    getServiceRatings();
    getUserRatings();
  }, [service_id]);
  return (
    <div className="ulasan-container">
      <h2>Ulasan</h2>
      <div className="card-ulasan-container">
        {mergedData.length > 0 ? (
          mergedData.map((rating1) => (
            <CardUlasan
              key={rating1.id}
              // {...console.log(rating1.rating)}
              reviewText={rating1.rating_comment}
              reviewImgUser={rating1.user[0].user_img}
              nama_depan={rating1.user[0].nama_depan}
              nama_belakang={rating1.user[0].nama_belakang}
            />
          ))
        ) : (
          <h5>Belum Ada Review</h5>
        )}
      </div>
    </div>
  );
};

export default SectionCardUlasan;
