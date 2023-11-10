import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import "../../styles/pages/detailService.css";
import SectionCardUlasan from "../organisms/SectionCardUlasan";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { limitAddress } from "../../utils/text";
import ActionButton from "../atoms/ActionButton";
import ModalForm from "../atoms/ModalForm";
import ButtonLinkOutline from "../atoms/ButtonLinkOutline";
import ModalAlbumImg from "../atoms/ModalAlbumImg";

const DetailService = () => {
  const { idService } = useParams();
  const [idUser, setIdUser] = useState("");
  const [service, setServices] = useState([]);
  const [show, setShow] = useState(false);
  const [showAlbumImg, setShowAlbumImg] = useState(false);
  const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  const { album } = service;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseAlbumImg = () => setShowAlbumImg(false);
  const handleShowAlbumImg = (img) => {
    setSelectedAlbumUrl(img);
    setShowAlbumImg(true);
  };

  const getIdUserLocalStorage = () => {
    const id_user = localStorage.getItem("id");
    if (id_user) {
      setIdUser(id_user);
    }
  };

  const getService = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/services/${idService}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const dataService = await response.json();
      setServices(dataService);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getService();
    getIdUserLocalStorage();
  }, []);
  return (
    <div className="container w-100 end-0">
      <div className="row justify-content-between z-3">
        <div className="col-md-12 col-lg-7">
          <div style={{ height: "306px" }}>
            <img
              src={service.thumbnail}
              className="h-100 w-100 rounded-2"
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
              {album &&
                album.map((img, i) => (
                  <div key={i} style={{ height: "80px" }}>
                    <img
                      src={img}
                      alt=""
                      className="w-100 rounded-2 h-100"
                      onClick={() => handleShowAlbumImg(img)}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="deskripsi-container">
            <h2>Deskripsi</h2>
            <div className="border rounded-1 p-2 deskripsi-inner-container">
              <p>{service.description}</p>
            </div>
          </div>
          <div className="ulasan-container">
            <SectionCardUlasan service_id={service.id} />
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div
            className="border border sticky-top mt-0 p-4 rounded-2"
            style={{ top: "100px" }}
          >
            <div>
              <h4 className="fw-bold">{service.name_store}</h4>
              <div className="d-flex align-items-center column-gap-2">
                <FaStar className="text-warning" /> {service.rating_star}
              </div>
              <div className="d-flex align-items-center column-gap-2">
                <FiMapPin /> {service.address && limitAddress(service.address)}
              </div>
            </div>
            <div className="mt-5 d-flex flex-column row-gap-3">
              <ButtonLinkOutline
                text={"Hubungi Teknisi"}
                path={`https://wa.me/447471667872`}
              />
              <ActionButton
                text={"Ajukan Pemesanan"}
                type={"button"}
                onClick={handleShow}
              />
              <ModalForm show={show} onHide={handleClose} user_id={idUser} />
              <ModalAlbumImg
                show={showAlbumImg}
                onHide={handleCloseAlbumImg}
                albumUrl={selectedAlbumUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
