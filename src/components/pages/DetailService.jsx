import Carousel from "nuka-carousel";
import { useState } from "react";
import "@/styles/pages/detailService.css";
import SectionCardUlasan from "@/components/organisms/SectionCardUlasan";
import { useNavigate, useParams } from "react-router";
import { FiMapPin } from "react-icons/fi";
import ActionButton from "@/components/atoms/ActionButton";
import ModalAlbumImg from "@/components/molecules/ModalAlbumImg";
import { useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import DeskripsiService from "@/components/molecules/DeskripsiService";

const DetailService = (props) => {
  const { idMitra } = useParams();
  const [showAlbumImg, setShowAlbumImg] = useState(false);
  const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  const navigate = useNavigate();
  const handleCloseAlbumImg = () => setShowAlbumImg(false);
  const handleShowAlbumImg = (imgUrl) => {
    setSelectedAlbumUrl(imgUrl);
    setShowAlbumImg(true);
  };

  const handleNavigateBooking = () => {
    localStorage.setItem("idMitra", idMitra);
    navigate("/booking");
  };

  const { data: service, isLoading } = useQuery({
    queryKey: ["detail-service", idMitra],
    queryFn: () => ServicesServices.getServiceDetail(idMitra),
  });

  if (isLoading) {
    return "loading....";
  }

  const BookingContainer = () => {
    return (
      <div className="border border mt-0 p-4 rounded-2 booking-container">
        <div>
          <h4 className="fw-bold">{service.data.name}</h4>
          <div className="d-flex align-items-center column-gap-2">
            {/* <FaStar className="text-warning" /> {service.rating_star} */}
          </div>
          <div className="d-flex align-items-center column-gap-2 mb-2">
            <FiMapPin /> Jl. {service.data.partner_id.district}{" "}
            {service.data.partner_id.city}, {service.data.partner_id.province}
          </div>
          <NumericFormat
            value={service?.data?.price}
            displayType="text"
            prefix="Rp "
            thousandSeparator={"."}
            decimalSeparator=","
            className="text-orange fw-semibold fs-4"
          />
        </div>
        <div className="mt-5 d-flex flex-column row-gap-3">
          <Link
            to={`https://wa.me/${service.data.user_id.phone}`}
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <ActionButtonOutline text={"Hubungi Teknisi"} className="w-100" />
          </Link>
          <ActionButton
            text={"Ajukan Pemesanan"}
            className="w-100"
            onClick={handleNavigateBooking}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container w-100 end-0">
      <div className="row justify-content-between z-3">
        <div className="col-md-12 col-lg-7">
          <div className="detail-service-img-thumbnail-container">
            <img
              src={service.data.thumbnail}
              className="h-100 w-100 rounded-2 object-fit-cover"
              alt=""
            />
          </div>
          <div className="mt-3">
            <Carousel
              slidesToShow={4.3}
              cellSpacing={10}
              renderCenterLeftControls={false}
              renderCenterRightControls={false}
              renderBottomCenterControls={false}
            >
              {service.data &&
                service.data.gallery_images.map((img, i) => (
                  <div key={i} className="detail-service-img-album">
                    <img
                      src={img}
                      alt=""
                      className="w-100 rounded-2 h-100 object-fit-cover"
                      onClick={() => handleShowAlbumImg(img)}
                    />
                  </div>
                ))}
            </Carousel>
            <ModalAlbumImg
              show={showAlbumImg}
              onHide={handleCloseAlbumImg}
              albumUrl={selectedAlbumUrl}
            />
          </div>
          <div className="deskripsi-container mt-4">
            <h2>Deskripsi</h2>
            <DeskripsiService htmlContent={service.data.description} />
          </div>
          <div className="mt-4">
            <SectionCardUlasan idService={idMitra} />
          </div>
        </div>
        <div className="col-md-12 mt-4 mt-lg-0 col-lg-5">
          <BookingContainer />
        </div>
      </div>
    </div>
  );
};

export default DetailService;
