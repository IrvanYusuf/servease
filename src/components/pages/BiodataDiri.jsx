import React, { useEffect, useState } from "react";
import "../../styles/pages/BiodataDiri.css";
import ActionButton from "../atoms/ActionButton";
import ModalFormEditUser from "../molecules/ModalFormEditUser";

const BiodataDiri = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idUserProfile, setIdUserProfile] = useState("");
  const [userProfile, setUserProfile] = useState([]);

  const handleShowModalEdit = () => {
    setShowModalEdit(true);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const getSingleUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3005/users/${idUserProfile}`,
        {
          method: "GET",
        }
      );
      const dataSingleUser = await response.json();
      setUserProfile(dataSingleUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getIdUserLocalStorage = () => {
    const id_user = localStorage.getItem("id");
    if (id_user) {
      setIdUserProfile(id_user);
    }
  };

  useEffect(() => {
    // Memanggil getSingleUser hanya jika idUserProfile sudah diperbarui
    getIdUserLocalStorage();
    if (idUserProfile) {
      getSingleUser();
    }
  }, [idUserProfile]);
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
            src={userProfile.user_img}
            alt=""
            width={"100%"}
            height={"100%"}
            className="rounded-3"
          />
          <div className="w-100">
            <label className="btn pilihFoto w-100">
              <input type="file" accept=".jpg,jpeg,.png" />
              Ubah Foto
            </label>
          </div>
        </div>
        <div className="col-8">
          <table>
            <tr>
              <td className="px-4 py-2">Nama Depan</td>
              <td className="ps-2">{userProfile.nama_depan}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Nama Belakang</td>
              <td className="ps-2">{userProfile.nama_belakang}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tanggal Lahir</td>
              <td className="ps-2">{userProfile.tanggal_lahir}</td>
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
              <td className="ps-2">{userProfile.nomor_hp}</td>
            </tr>
          </table>
        </div>
      </div>
      <ModalFormEditUser
        show={showModalEdit}
        onHide={handleCloseModalEdit}
        dataUser={userProfile}
      />
    </div>
  );
};

export default BiodataDiri;
