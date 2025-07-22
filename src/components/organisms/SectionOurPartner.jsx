import kangService from "@/assets/img/kang-servis.png";
import "@/styles/organisms/sectionOurPartner.css";
import { Link } from "react-router-dom/dist";
import ButtonLink from "../atoms/ButtonLink";

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
    <div className="px-4 py-lg-0 py-4 d-flex align-items-center h-100 section-our-partner-container">
      <div className="h-100 d-flex flex-column justify-content-center">
        <h2 className="text-white fs-1 d-none d-lg-block">
          Gabung Jadi Mitra ServEase
        </h2>
        <h2 className="text-white fs-3 d-block d-lg-none">
          Gabung Jadi Mitra ServEase
        </h2>
        <p className="text-white fs-2 d-none d-lg-block">
          Perluas jangkauan customer layanan servis anda <br /> dengan kami
        </p>
        <p className="text-white fs-4 d-block d-lg-none">
          Perluas jangkauan customer layanan servis anda <br /> dengan kami
        </p>
        <div className="d-flex h-100 column-gap-3">
          <ButtonLink text={"Daftar Sekarang"} path={"/mitra/register"} />
          <ButtonLink text={"Info Lebih Lanjut"} path={"/"} variant="navy" />
        </div>
      </div>
      <div>
        <img className="d-none d-lg-block" src={kangService} alt="" />
      </div>
    </div>
  );
};

export default SectionOurPartner;
