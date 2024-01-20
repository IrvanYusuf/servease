import React, { useEffect, useState } from "react";
import "../../styles/pages/BiodataDiri.css";
import ActionButton from "../atoms/ActionButton";
import ModalFormEditUser from "../molecules/ModalFormEditUser";
import ModalFormTambahAlamat from "../molecules/ModalFormTambahAlamat";
import { useAuth } from "../../context/authContext";
import { apiUser } from "../../api/apiUser";
import { jwtDecode } from "jwt-decode";
import profileImg from "../../assets/icon/profile.png";
import ModalUpdateFoto from "../molecules/ModalUpdateFoto";

const BiodataDiri = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalImage, setShowModalImage] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [tanggalLahir, setTanggalLahir] = useState();

  const handleShowModalEdit = () => {
    setShowModalEdit(true);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const handleShowImageEdit = () => {
    setShowModalImage(true);
  };

  const getSingleUser = async () => {
    try {
      const response = await fetch(`${apiUser}/detail/${decoded.id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: token,
          credentials: true,
        },
      });
      const dataSingleUser = await response.json();
      setUserProfile(dataSingleUser.data[0]);
      const originalDate = dataSingleUser.data[0].tanggal_lahir;
      const formattedDate = new Date(originalDate).toISOString().split("T")[0];
      setTanggalLahir(formattedDate);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between py-3">
        <h4>Biodata Diri</h4>
        <div>
          <ActionButton text={"Ubah"} onClick={handleShowModalEdit} />
        </div>
      </div>
      <div className="row w-100">
        <div className="col-4 d-flex flex-column align-items-center">
          <img
            src={
              userProfile.img !== null
                ? `http://localhost:3000/images/${userProfile.img}`
                : profileImg
            }
            alt=""
            width={"100%"}
            height={"100%"}
            className="rounded-3"
          />
          <div className="w-100">
            <button
              className="btn pilihFoto w-100"
              onClick={handleShowImageEdit}
            >
              Ubah Foto
            </button>
          </div>
        </div>
        <div className="col-8">
          <table>
            <tr>
              <td className="px-4 py-2">Username</td>
              <td className="ps-2">{userProfile.username}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Nama</td>
              <td className="ps-2">{userProfile.nama}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tanggal Lahir</td>
              <td className="ps-2">{tanggalLahir}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jenis Kelamin</td>
              <td className="ps-2">{userProfile.jenis_kelamin}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Email</td>
              <td className="ps-2">{userProfile.email}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Nomor Handphone</td>
              <td className="ps-2">{userProfile.no_telp}</td>
            </tr>
          </table>
        </div>
      </div>
      <ModalFormEditUser
        show={showModalEdit}
        onHide={handleCloseModalEdit}
        dataUser={userProfile}
        tanggalLahir={tanggalLahir}
        getSingleUser={getSingleUser}
      />
      <ModalUpdateFoto
        show={showModalImage}
        onHide={() => setShowModalImage(false)}
        getSingleUser={getSingleUser}
      />
    </div>
  );
};

export default BiodataDiri;
