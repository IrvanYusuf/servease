import React from "react";
import gambar from "../../assets/img/user-img.png";
import "../../styles/pages/BiodataDiri.css";

const BiodataDiri = () => {
  return (
    <div className="container-xl costum-container">
      <div className="header">
        <h4>Biodata Diri</h4>
        <button className="btn costum-btn">Ubah</button>
      </div>
      <div className="container box-container">
        <div className="costum-card">
          <div>
            <div className="bagianFoto">
              <img src={gambar} className="costum-img" alt="userImage"></img>
              <div className="BioData">
                <p>Nama Depan </p>
                <p>Nama Belakang</p>
                <p>Tanggal Lahir</p>
                <p>Jenis Kelamin</p>
                <p>Email</p>
                <p>Nomor Hp</p>
              </div>
            </div>
            <button className="btn pilihFoto">Ubah Foto</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataDiri;
