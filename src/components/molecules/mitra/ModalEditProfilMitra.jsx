import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { getCategory } from "../../../utils/category";
import { apiMitra } from "../../../api/apiMitra";
import profileImg from "../../../assets/icon/profile.png";

const ModalEditProfilMitra = (props) => {
  console.log(props);
  const [namaServis, setNamaServis] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [kategori, setKategori] = useState("");
  const [idKategori, setIdKategori] = useState("");
  const [deskripsi, setDekripsi] = useState("");
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;

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
      setNamaServis(result.nama_servis);
      setLogo(result.image);
      setIdKategori(result.id_kategori);
      setDekripsi(result.deskripsi);
      setLogoUrl(`http://localhost:3000/images/${result.image}`);
      const kategoriConvert = getCategory(result.id_kategori);
      setKategori(kategoriConvert);
      if (result.status === "Tersedia") {
        setSwitchChecked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const upload = e.target.files[0];
    setLogoUrl(URL.createObjectURL(upload));
    setLogo(upload);
    console.log(upload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_servis", namaServis);
    formData.append("image", logo);
    formData.append("id_kategori", idKategori);
    formData.append("deskripsi", deskripsi);
    try {
      const response = await fetch(`${apiMitra}/profil/${decoded.id}`, {
        method: "PATCH",
        headers: {
          authorization: token,
        },
        body: formData,
      });
      console.log(response);

      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
      props.getMitraProfilLayanan();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    props.onHide();
    setNamaServis("");
    setLogo("");
    setLogoUrl("");
    setKategori("");
    setDekripsi("");
  };

  useEffect(() => {
    getMitraProfilLayanan();
  }, [props.show]);
  console.log(logo);

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
              required
              name="image"
              accept=".jpg,.jpeg,.png"
              // onChange={handleFileChange}
              onChange={handleFileChange}
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
              name="id_kategori"
              onChange={(e) => setIdKategori(e.target.value)}
              //   hidden
            >
              {/* <option selected>Open this select menu</option> */}
              <option value={idKategori} disabled selected>
                {kategori}
              </option>
              <option value="1">Service AC</option>
              <option value="2">Service PC</option>
              <option value="3">Service Lampu</option>
              <option value="4">Service Mesin Cuci</option>
              <option value="5">Service Smartphone</option>
              <option value="6">Service TV</option>
              <option value="7">Renovasi Rumah</option>
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
            ></textarea>
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={handleCancel}
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

export default ModalEditProfilMitra;
