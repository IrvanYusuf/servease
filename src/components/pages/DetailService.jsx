import Carousel from "nuka-carousel";
import React, { useEffect, useState } from "react";
import "../../styles/pages/detailService.css";
import SectionCardUlasan from "../organisms/SectionCardUlasan";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { limitAddress } from "../../utils/text";
import ActionButton from "../atoms/ActionButton";
import ButtonLinkOutline from "../atoms/ButtonLinkOutline";
import ModalAlbumImg from "../molecules/ModalAlbumImg";
import ModalFormBooking from "../organisms/ModalFormBooking";
import { apiMitra } from "../../api/apiMitra";
import { useAuth } from "../../context/authContext";
import { apiAddress } from "../../api/apiAddress";

const DetailService = (props) => {
  const { idMitra } = useParams();
  const [service, setServices] = useState([]);
  const [album, setAlbum] = useState([]);
  const [address, setAddress] = useState([]);
  const [show, setShow] = useState(false);
  const [showAlbumImg, setShowAlbumImg] = useState(false);
  const [selectedAlbumUrl, setSelectedAlbumUrl] = useState("");
  const { token } = useAuth();
  console.log(props.idCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(idMitra);

  const handleCloseAlbumImg = () => setShowAlbumImg(false);
  const handleShowAlbumImg = (imgUrl) => {
    setSelectedAlbumUrl(imgUrl);
    setShowAlbumImg(true);
  };
  const getServiceDetail = async () => {
    try {
      const response = await fetch(
        `${apiMitra}/profil/detail/${parseInt(idMitra)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      const [result] = data;
      console.log(result);
      setServices(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAlbumGalleries = async () => {
    try {
      const response = await fetch(`${apiMitra}/gallery/${service.id_mitra}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      setAlbum(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddressMitra = async () => {
    try {
      const response = await fetch(`${apiAddress}/${service.id_user}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      const [result] = data;
      setAddress(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServiceDetail();
  }, [idMitra]);

  useEffect(() => {
    if (service.id_mitra) {
      getAlbumGalleries();
      getAddressMitra();
    }
  }, [service.id_mitra]);

  const BookingContainer = () => {
    return (
      <div className="border border mt-0 p-4 rounded-2 booking-container">
        <div>
          <h4 className="fw-bold">{service.nama_servis}</h4>
          <div className="d-flex align-items-center column-gap-2">
            {/* <FaStar className="text-warning" /> {service.rating_star} */}
          </div>
          <div className="d-flex align-items-center column-gap-2">
            <FiMapPin />{" "}
            {address && `${address.kecamatan} ${address.kabupaten}`}
          </div>
        </div>
        <div className="mt-5 d-flex flex-column row-gap-3">
          <ButtonLinkOutline
            text={"Hubungi Teknisi"}
            path={`https://wa.me/${service.no_telp}`}
            target={"_blank"}
          />
          <ActionButton
            text={"Ajukan Pemesanan"}
            type={"button"}
            onClick={handleShow}
          />
          <ModalFormBooking
            show={show}
            onHide={handleClose}
            idMitra={service.id_mitra}
            idCategory={service.id_kategori}
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
              src={`http://localhost:3000/images/${service.image}`}
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
                  <div key={i} className="detail-service-img-album">
                    <img
                      src={`http://localhost:3000/images/gallery/${img.image}`}
                      alt=""
                      className="w-100 rounded-2 h-100"
                      onClick={() => handleShowAlbumImg(img.image)}
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
          <div className="deskripsi-container">
            <h2>Deskripsi</h2>
            <div className="border rounded-1 p-2 deskripsi-inner-container">
              <p>{service.deskripsi}</p>
            </div>
          </div>
          <div className="ulasan-container">
            <SectionCardUlasan service_id={service.id} />
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <BookingContainer />
        </div>
      </div>
    </div>
  );
};

export default DetailService;
