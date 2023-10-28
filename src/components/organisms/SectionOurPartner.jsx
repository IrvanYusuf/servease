import React from "react";
import ButtonLink from "../atoms/ButtonLink";
import kangService from "../../assets/img/kang-servis.png";
const SectionOurPartner = () => {
  return (
    <div
      className="p-3 position-relative"
      style={{
        marginTop: "69px",
        backgroundColor: "#4F50E9",
        borderRadius: "20px",
        height: "400px",
      }}
    >
      <div className="h-100 d-flex flex-column justify-content-center">
        <h2 className="text-white" style={{ fontSize: "48px" }}>
          Gabung Jadi Mitra ServEase
        </h2>
        <p className="text-white" style={{ fontSize: "30px" }}>
          Perluas jangkauan customer layanan servis anda <br /> dengan kami
        </p>
        <div className="d-flex column-gap-3">
          <div>
            <ButtonLink path={"/"} text={"Daftar Sekarang"} />
          </div>
          <div>
            <ButtonLink path={"/"} text={"Info Lebih Lanjut"} />
          </div>
        </div>
      </div>
      <div>
        <img
          className="position-absolute end-0"
          style={{ bottom: "0px" }}
          src={kangService}
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionOurPartner;
