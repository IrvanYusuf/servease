import React, { useEffect, useState } from "react";
import SectionCategoryService from "../organisms/SectionCategoryService";
import SectionOurPartner from "../organisms/SectionOurPartner";
import SectionCardTutorial from "../organisms/SectionCardTutorial";
import Banner from "../organisms/Banner";
import SectionAboutUs from "../organisms/SectionAboutUs";
import { apiBanner } from "../../api/apiBanner";
import { apiCategories } from "../../api/apiCategories";
import { apiVideos } from "../../api/apiVideos";
import { useAuth } from "../../context/authContext";
const LandingPage = () => {
  const [category, setCategory] = useState([]);
  const [videos, setVideos] = useState([]);

  const getAllCategory = async () => {
    try {
      const response = await fetch(apiCategories, {
        method: "GET",
      });
      const dataCategories = await response.json();
      if (response.status === 200) {
        setCategory(dataCategories.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllVideos = async () => {
    try {
      const response = await fetch(apiVideos, {
        method: "GET",
      });
      const dataAllVideos = await response.json();
      if (response.status === 200) {
        setVideos(dataAllVideos.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllBanners();
    getAllCategory();
    getAllVideos();
  }, []);

  return (
    <div className="container">
      <Banner />
      <SectionCategoryService dataCategories={category} />
      {/* <SectionCardAtractiveOffering /> */}
      <SectionOurPartner />
      <SectionCardTutorial videosData={videos} />
      <SectionAboutUs />
    </div>
  );
};

export default LandingPage;
