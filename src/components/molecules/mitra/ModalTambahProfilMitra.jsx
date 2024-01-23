import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { useAuth } from "../../../context/authContext";
import { apiMitra } from "../../../api/apiMitra";
import { apiUser } from "../../../api/apiUser";
import { jwtDecode } from "jwt-decode";
import profileImg from "../../../assets/icon/profile.png";

const ModalTambahProfilMitra = (props) => {
  const { token, setAuthIdMitra } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [namaServis, setNamaServis] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [idKategori, setIdKategori] = useState("");
  const [deskripsi, setDekripsi] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
      setAuthIdMitra(result.id_mitra);
      console.log(result.id_mitra);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const upload = e.target.files[0];
    setLogoUrl(URL.createObjectURL(upload));
    setLogo(upload);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataImgUser = new FormData();
      formDataImgUser.append("image", logo);
      const formData = new FormData();
      formData.append("nama_servis", namaServis);
      formData.append("image", logo);
      formData.append("id_kategori", idKategori);
      formData.append("deskripsi", deskripsi);
      formData.append("id_user", decoded.id);
      formData.append("status", "Tersedia");
      const response = await fetch(`${apiMitra}/profil/${decoded.id}`, {
        method: "POST",
        headers: {
          authorization: token,
          // "Content-type": "application/json",
        },
        body: formData,
      });
      const responseUpdateImgUser = await fetch(
        `${apiUser}/image/single/${decoded.id}`,
        {
          method: "PATCH",
          headers: {
            authorization: token,
            // "Content-type": "application/json",
          },
          body: formDataImgUser,
        }
      );
      const { data } = await response.json();
      if (data.affectedRows > 0) {
        swal({
          title: "Success",
          text: "Data Berhasil Diubah",
          icon: "success",
          iconColor: "#EF3D01",
          confirmButtonText: "Tutup",
          //   timer: 1000,
        });
        setIsSuccess(true);
        getMitraProfilLayanan();
      }
      // props.getMitraProfilLayanan();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Nama Servis"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Mis. jhon doe servis"
              value={namaServis}
              name="nama_servis"
              onChange={(e) => setNamaServis(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Logo"} />
            <span className="text-danger"> *</span>
            <input
              type="file"
              className="form-control"
              name="image"
              accept=".jpg,.jpeg,.png"
              // onChange={handleFileChange}
              onChange={handleFileChange}
              required
            />
            <img
              src={logo ? logoUrl : profileImg}
              alt=""
              className="mt-3 me-2"
              width={"100px"}
            />
            <div>
              <span>{logo && logo.name}</span>
            </div>
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kategori"} />
            <span className="text-danger"> *</span>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setIdKategori(e.target.value)}
            >
              {/* <option selected>Open this select menu</option> */}
              <option disabled selected hidden>
                Pilih Kategori
              </option>
              <option value="1">AC</option>
              <option value="2">PC</option>
              <option value="3">Lampu</option>
              <option value="4">Mesin Cuci</option>
              <option value="5">Smartphone</option>
              <option value="6">TV</option>
              <option value="7">Rumah</option>
            </select>
          </div>
          <div className="col">
            <LabelInput labelText={"Deskripsi"} />
            <textarea
              name="deskripsi"
              id=""
              cols="30"
              rows="6"
              className="form-control"
              onChange={(e) => setDekripsi(e.target.value)}
              value={deskripsi}
              //   value={"Rumah warna merah logo banteng"}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={props.onHide}
                type={"button"}
                text={"Batal"}
              />
            </div>
            <div>
              <ActionButton
                text={"Simpan"}
                type={"button"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalTambahProfilMitra;
