import React, { useEffect, useState } from "react";
import ActionButton from "../atoms/ActionButton";
import iconLocationNotFound from "../../assets/icon/location-not-found.png";
import ModalFormTambahAlamat from "../molecules/ModalFormTambahAlamat";
import ModalFormEditUser from "../molecules/ModalFormEditUser";
import ModalFormEditAlamat from "../molecules/ModalFormEditAlamat";
import ModalTes from "../molecules/ModalTes";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiAddress } from "../../api/apiAddress";
import Swal from "sweetalert2";

const DaftarAlamat = () => {
  const [showModalAlamat, setShowModalAlamat] = useState(false);
  const [showModalEditAlamat, setShowModalEditAlamat] = useState(false);
  const [showModalDeleteAlamat, setShowModalDeleteAlamat] = useState(false);
  const [alamat, setAlamat] = useState([]);
  const [idUser, setIdUser] = useState(0);
  const [idAlamat, setIdAlamat] = useState(0);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [isPrimary, setIsPrimary] = useState("");

  const handleShowModalAlamat = () => {
    setShowModalAlamat(true);
  };
  const handleCloseModalAlamat = () => {
    setShowModalAlamat(false);
  };

  const handleShowModalEditAlamat = (idAlamat) => {
    setIdAlamat(idAlamat);
    setShowModalEditAlamat(true);
  };
  const handleCloseModalEditAlamat = () => setShowModalEditAlamat(false);

  const handleShowModalDeleteAlamat = (id) => {
    setIdUser(id);
    setShowModalDeleteAlamat(true);
  };

  const handleCloseModalDeleteAlamat = () => setShowModalDeleteAlamat(false);

  const handleDeleteAddress = async (idAlamat) => {
    setIdAlamat(idAlamat);
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "kamu akan menghapus alamat ini",
      icon: "warning",
      iconColor: "#EF3D01",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`${apiAddress}/${idAlamat}`, {
          headers: {
            authorization: token,
            "Content-type": "application/json",
            credentials: true,
          },
          method: "DELETE",
          body: JSON.stringify({ id_user: decoded.id }),
        });
        getAllAddress();
        Swal.fire({
          title: "Deleted!",
          text: "Alamat kamu telah terhapus.",
          icon: "success",
          iconColor: "#EF3D01",
        });
      }
    });
  };

  const getAllAddress = async () => {
    try {
      const response = await fetch(`${apiAddress}/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
          "Content-type": "application/json",
          credentials: true,
        },
      });
      const data = await response.json();
      setAlamat(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrimaryAddress = (id) => {
    setIsPrimary(id);
    localStorage.setItem("alamat", id);
  };

  useEffect(() => {
    getAllAddress();
  }, []);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4 style={{ textAlign: "left" }}>Daftar Alamat {isPrimary}</h4>
        <div>
          <ActionButton
            text={"+ Tambah Alamat"}
            onClick={handleShowModalAlamat}
          />
        </div>
      </div>
      <div className="h-100 mt-2 overflow-y-auto">
        <div className="h-100">
          {alamat.map((data, i) => (
            <div
              className="shadow p-3 rounded-3 mb-4"
              key={i}
              style={{
                border: `1px solid ${
                  isPrimary === data.id_alamat ? "#EF3D01" : "#D0D4CA"
                }`,
              }}
            >
              <b className="text-secondary">{data.label_alamat}</b>
              <h6 className="fw-normal">{data.no_telp}</h6>
              <div className="d-flex">
                <h6 className="fw-normal">{data.nama_jalan},</h6>
                <h6 className="fw-normal">{data.deskripsi}</h6>
              </div>
              <div className="d-flex">
                <h6 className="fw-normal">{data.kabupaten},</h6>
                <h6 className="fw-normal"> {data.kecamatan},</h6>
                <h6 className="fw-normal"> {data.provinsi}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <button
                    className="border-0 bg-transparent fw-semibold"
                    style={{ color: "#EF3D01" }}
                    onClick={() => handleShowModalEditAlamat(data.id_alamat)}
                  >
                    Ubah
                  </button>
                  <button
                    className="border-0 bg-transparent fw-semibold"
                    style={{ color: "#EF3D01" }}
                    onClick={() => handleDeleteAddress(data.id_alamat)}
                  >
                    Hapus
                  </button>
                </div>
                <button
                  className="border bg-transparent p-1"
                  onClick={() => handlePrimaryAddress(data.id_alamat)}
                >
                  Atur Sebagai Utama
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <img src={iconLocationNotFound} alt="" height={150} width={150} />
          <h5 className="text-body-tertiary mt-2">
            Kamu belum punya alamat tersimpan
          </h5>
        </div> */}
      </div>
      <ModalFormTambahAlamat
        show={showModalAlamat}
        onHide={handleCloseModalAlamat}
        getAllAddress={getAllAddress}
      />
      <ModalFormEditAlamat
        show={showModalEditAlamat}
        onHide={handleCloseModalEditAlamat}
        idAddress={idAlamat}
      />
      {/* <ModalTes
        show={showModalDeleteAlamat}
        onHide={handleCloseModalDeleteAlamat}
        id={idUser}
      /> */}
    </div>
  );
};

export default DaftarAlamat;
