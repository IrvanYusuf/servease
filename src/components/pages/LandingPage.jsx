import React, { useEffect, useState } from "react";
import SectionCategoryService from "../organisms/SectionCategoryService";
// import SectionCardAtractiveOffering from "../organisms/SectionCardAtractiveOffering";
import SectionOurPartner from "../organisms/SectionOurPartner";
import SectionCardTutorial from "../organisms/SectionCardTutorial";
import Banner from "../organisms/Banner";
import SectionAboutUs from "../organisms/SectionAboutUs";
const LandingPage = () => {
  const [banners, setBanners] = useState([]);
  const [category, setCategory] = useState([]);
  const [videos, setVideos] = useState([]);

  const getAllBanners = async () => {
    try {
      const response = await fetch("http://localhost:3000/banners", {
        method: "GET",
      });
      const dataBanners = await response.json();
      setBanners(dataBanners);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllCategory = async () => {
    try {
      const response = await fetch("http://localhost:3001/categories", {
        method: "GET",
      });
      const dataCategories = await response.json();
      setCategory(dataCategories);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllVideos = async () => {
    try {
      const response = await fetch("http://localhost:3002/videos", {
        method: "GET",
      });
      const dataAllVideos = await response.json();
      setVideos(dataAllVideos);
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
      <Banner dataBanners={banners} />
      <SectionCategoryService dataCategories={category} />
      {/* <SectionCardAtractiveOffering /> */}
      <SectionOurPartner />
      <SectionCardTutorial videosData={videos} />
      <SectionAboutUs />
    </div>
  );
};

export default LandingPage;
