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

const DetailService = () => {
  const { idService } = useParams();
  const [idUser, setIdUser] = useState("");
  const [service, setServices] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <div style={{ height: "306px", borderRadius: "10px" }}>
            <img src={service.thumbnail} className="h-100 w-100" alt="" />
          </div>
          <div className="mt-3">
            <Carousel
              slidesToShow={4.3}
              cellSpacing={10}
              renderCenterLeftControls={false}
              renderCenterRightControls={false}
              renderBottomCenterControls={false}
            >
              {Array.from({ length: 5 }, (value, i) => {
                return (
                  <div
                    key={i}
                    className="bg-body-secondary"
                    style={{ height: "80px", borderRadius: "10px" }}
                  ></div>
                );
              })}
            </Carousel>
          </div>
          <div className="deskripsi-container">
            <h2>Deskripsi</h2>
            <div className="border rounded-1 p-2 deskripsi-inner-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                eos laborum sapiente accusamus sequi, velit necessitatibus,
                reiciendis laudantium illo consectetur vero repellendus
                distinctio quae tenetur labore? Doloribus modi dolor nulla.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam porro earum beatae? Voluptatibus, possimus cumque
                libero modi placeat amet sed, eaque itaque et, sunt recusandae
                soluta alias sint earum ipsam.
              </p>
            </div>
          </div>
          <div className="ulasan-container">
            <SectionCardUlasan user_id={idUser} service_id={service.id} />
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
              <ModalForm show={show} onHide={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
