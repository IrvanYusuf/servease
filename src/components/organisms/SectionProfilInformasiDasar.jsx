import React, { useEffect, useState } from "react";
import ActionButton from "../atoms/ActionButton";
import "../../styles/organisms/sectionProfileInformasiDasar.css";
import ModalEditProfilMitra from "../molecules/mitra/ModalEditProfilMitra";
import ModalTambahProfilMitra from "../molecules/mitra/ModalTambahProfilMitra";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiMitra } from "../../api/apiMitra";
import profileImg from "../../assets/icon/profile.png";
import { getCategory } from "../../utils/category";

const SectionProfilInformasiDasar = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [showModalEditLayanan, setModalEditLayanan] = useState(false);
  const [showModalTambahLayanan, setModalTambahLayanan] = useState(false);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [mitraProfil, setMitraProfil] = useState({});
  const [kategori, setKategori] = useState("");
  console.log(token);

  const handleShowEdit = () => {
    setModalEditLayanan(true);
  };
  const handleShowTambah = () => {
    setModalTambahLayanan(true);
  };

  const getMitraProfilLayanan = async () => {
    try {
      const response = await fetch(`${apiMitra}/profil/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const [result] = data.data;
      setMitraProfil(result);
      console.log(response);
      const kategori = getCategory(result.id_kategori);
      setKategori(kategori);
      if (result.status === "Tersedia") {
        setSwitchChecked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLayananTersedia = async () => {
    let tersedia;
    setSwitchChecked(!switchChecked);
    if (!switchChecked) {
      tersedia = "Tersedia";
    } else {
      tersedia = "Tidak Tersedia";
    }
    console.log(tersedia);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`${apiMitra}/profil/status/${decoded.id}`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: tersedia }),
    });
    getMitraProfilLayanan();
  };
  useEffect(() => {
    getMitraProfilLayanan();
  }, []);
  return (
    <div>
      {mitraProfil ? (
        <div>
          <div className="d-flex justify-content-between">
            <h4>Informasi Dasar</h4>
            <div>
              <ActionButton text={"Ubah"} onClick={handleShowEdit} />
            </div>
          </div>
          <div>
            <table className=" w-100">
              <tbody>
                <tr className="mb-3">
                  <td width={"20%"}>Nama Servis</td>
                  <td>:</td>
                  <td>{mitraProfil.nama_servis}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width={"20%"}>Logo</td>
                  <td>:</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          mitraProfil.image
                            ? `http://localhost:3000/images/${mitraProfil.image}`
                            : profileImg
                        }
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        className="rounded-circle"
                      />
                      <div>
                        <ul style={{ fontSize: "12px" }}>
                          <li>
                            Ukuran gambar yang direkomendasikan: lebar 300px,
                            tinggi 300px
                          </li>
                          <li>Besar file maks.: 2.0MB</li>
                          <li>Format gambar yang diterima : JPG,JPEG,PNG</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td width={"20%"}>Kategori</td>
                  <td>:</td>
                  <td>{kategori}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width={"20%"}>Deskripsi</td>
                  <td>:</td>
                  <td>{mitraProfil.deskripsi}</td>
                  <td></td>
                </tr>
                <tr>
                  <td width={"20%"}>Status Layanan</td>
                  <td>:</td>
                  <td>{switchChecked ? "Tersedia" : "Tidak Tersedia"}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input switch-layanan"
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={switchChecked}
                        onChange={handleLayananTersedia}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ModalEditProfilMitra
            show={showModalEditLayanan}
            onHide={() => setModalEditLayanan(false)}
            getMitraProfilLayanan={getMitraProfilLayanan}
          />
        </div>
      ) : (
        <div>
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center row-gap-4">
              <img src="/img/not-found.png" alt="" />
              <h6>Anda belum memiliki informasi layanan</h6>
              <div>
                <ActionButton text={"Buat"} onClick={handleShowTambah} />
              </div>
            </div>
          </div>
          <ModalTambahProfilMitra
            show={showModalTambahLayanan}
            onHide={() => setModalTambahLayanan(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SectionProfilInformasiDasar;
