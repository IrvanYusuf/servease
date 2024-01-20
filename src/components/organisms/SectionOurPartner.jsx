import React from "react";
import kangService from "../../assets/img/kang-servis.png";
import "../../styles/organisms/sectionOurPartner.css";
import { Link } from "react-router-dom/dist";

const dataButtonOurPartner = [
  {
    path: "/mitra/register",
    text: "Daftar Sekarang",
    className: "btn-our-partner-orange",
  },
  {
    path: "/",
    text: "Info Lebih Lanjut",
    className: "btn-our-partner-navy",
  },
];

const ButtonOurPartner = ({ path, text, classname }) => {
  return (
    <Link
      to={path}
      className={`text-decoration-none fw-bold text-white text-center btn-our-partner ${classname}`}
    >
      {text}
    </Link>
  );
};

const SectionOurPartner = () => {
  return (
    <div className="p-3 position-relative section-our-partner-container">
      <div className="h-100 d-flex flex-column justify-content-center">
        <h2 className="text-white">Gabung Jadi Mitra ServEase</h2>
        <p className="text-white">
          Perluas jangkauan customer layanan servis anda <br /> dengan kami
        </p>
        <div className="d-flex column-gap-3">
          {dataButtonOurPartner.map((data, i) => (
            <div key={i}>
              <ButtonOurPartner
                text={data.text}
                classname={data.className}
                path={data.path}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <img className="position-absolute end-0" src={kangService} alt="" />
      </div>
    </div>
  );
};

export default SectionOurPartner;
