import React from "react";
import Carousel from "nuka-carousel";
import prevIcon from "../../assets/icon/back.png";
import nextIcon from "../../assets/icon/next.png";
import "../../styles/organisms/banner.css";
const Banner = ({ dataBanners }) => {
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
        {dataBanners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.img} alt="" className="w-100" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
