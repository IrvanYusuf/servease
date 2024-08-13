import React from "react";
import Carousel from "nuka-carousel";
import prevIcon from "../../assets/icon/back.png";
import nextIcon from "../../assets/icon/next.png";
import "../../styles/organisms/banner.css";
import Banner1 from "../../assets/img/banners/banner1.png";
import Banner2 from "../../assets/img/banners/banner2.png";
const Banner = ({ dataBanners }) => {
  // console.log(dataBanners);
  return (
    <div>
      <Carousel
        wrapAround={true}
        autoplay={true}
        pauseOnHover={false}
        autoplayInterval={3000}
        cellSpacing={20}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="banner-carousel-render-center-left-controls"
          >
            <img src={prevIcon} alt="" className="w-100 h-100" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="banner-carousel-render-center-right-controls"
          >
            <img src={nextIcon} alt="" />
          </button>
        )}
      >
        {dataBanners.map((banner, i) => (
          <div key={i}>
            <img src={banner} alt="" className="w-100" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
