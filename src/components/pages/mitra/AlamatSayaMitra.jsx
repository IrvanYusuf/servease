import React, { useEffect, useState } from "react";
import ActionButton from "../../atoms/ActionButton";
import "../../../styles/organisms/sectionPenilaianSemua.css";
import ModalFormTambahAlamat from "../../molecules/ModalFormTambahAlamat";
import ModalEditAlamatMitra from "../../molecules/mitra/ModalEditAlamatMitra";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiAddress } from "../../../api/apiAddress";

const AlamatSayaMitra = () => {
  const [showTambahAlamat, setShowTambahAlamat] = useState(false);
  const [showEditAlamat, setShowEditAlamat] = useState(false);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [address, setAddress] = useState([]);
  const [idAlamat, setIdAlamat] = useState(0);

  const handleShow = () => {
    setShowTambahAlamat(true);
  };

  const handleShowEdit = (i) => {
    setShowEditAlamat(true);
  };

  const getAllAddress = async () => {
    try {
      const response = await fetch(`${apiAddress}/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      setAddress(data.data);
      setIdAlamat(data.data[0].id_alamat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="mt-2 d-flex justify-content-between">
        <div>
          <h4>Alamat Saya</h4>
          <span>Atur alamat anda</span>
        </div>
        <div>
          <ActionButton text={"Tambah Alamat"} onClick={handleShow} />
        </div>
      </div>
      <hr className="mt-5" />
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Label Alamat</th>
              <th>No. Hp</th>
              <th>Alamat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {address.map((data, i) => (
              <tr>
                <td className="fw-medium text-secondary">
                  Agus Cleaning Jr Medan
                </td>
                <td className="fw-medium text-secondary">089812341234</td>
                <td className="fw-medium text-secondary">
                  <span>
                    Jalan Jangka No.25, Sei Putih Barat Kel, Medan Petisah
                  </span>
                  <br />
                  <span>KOTA MEDAN - MEDAN PETISAH</span>
                  <br />
                  <span>SUMATERA UTARA</span>
                  <br />
                  <span>ID 20118</span>
                </td>
                <td>
                  <button
                    className="bg-transparent border-0 fw-medium"
                    style={{ color: "#EF3D01" }}
                    onClick={() => handleShowEdit(i)}
                  >
                    Ubah
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalFormTambahAlamat
        show={showTambahAlamat}
        onHide={() => setShowTambahAlamat(false)}
        getAllAddress={getAllAddress}
      />
      <ModalEditAlamatMitra
        show={showEditAlamat}
        onHide={() => setShowEditAlamat(false)}
        getAllAddress={getAllAddress}
        idAddress={idAlamat}
      />
    </div>
  );
};

export default AlamatSayaMitra;
