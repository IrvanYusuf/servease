import React from "react";
import Carousel from "nuka-carousel";
import prevIcon from "@/assets/icon/back.png";
import nextIcon from "@/assets/icon/next.png";
import "@/styles/organisms/banner.css";
import { Placeholder } from "react-bootstrap";
const Banner = ({ dataBanners, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Placeholder as="div" animation="glow">
          <Placeholder
            style={{ height: "300px", width: "100%" }}
            className="rounded"
          />
        </Placeholder>
      ) : (
        <Carousel
          wrapAround={true}
          autoplay={true}
          pauseOnHover={false}
          autoplayInterval={3000}
          cellSpacing={20}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className="banner-carousel-render-center-left-controls d-none d-lg-block"
            >
              <img src={prevIcon} alt="" className="w-100 h-100" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className="banner-carousel-render-center-right-controls d-none d-lg-block"
            >
              <img src={nextIcon} alt="" />
            </button>
          )}
        >
          {dataBanners?.data?.map((banner, i) => (
            <div key={i}>
              <img src={banner.url_image} alt="" className="w-100" />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
