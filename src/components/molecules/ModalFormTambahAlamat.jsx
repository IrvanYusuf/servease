import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { useState } from "react";
import { apiAddress } from "../../api/apiAddress";
import { useAuth } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { swal } from "../../utils/sweetAlert";

const ModalFormTambahAlamat = (props) => {
  const { token } = useAuth();
  const { getAllAddress } = props;
  const decoded = token ? jwtDecode(token) : null;
  const [labelAlamat, setLabelAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [namaJalan, setNamaJalan] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleTambahAlamat = async (e) => {
    e.preventDefault();
    const newAddress = {
      id_user: decoded.id,
      label_alamat: labelAlamat,
      no_telp: noTelp,
      nama_jalan: namaJalan,
      provinsi: provinsi,
      kabupaten: kabupaten,
      kecamatan: kecamatan,
      deskripsi: deskripsi,
    };
    const response = await fetch(apiAddress, {
      headers: {
        authorization: token,
        "Content-type": "application/json",
        credentials: true,
      },
      method: "POST",
      body: JSON.stringify(newAddress),
    });
    const data = await response.json();
    if (data.data.affectedRows > 0) {
      getAllAddress();
      swal({
        title: "Success",
        text: "Data Berhasil Ditambahkan",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
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
        <form onSubmit={handleTambahAlamat} noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Label Alamat"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              name="label_alamat"
              placeholder="Mis. Rumah / Kantor"
              value={labelAlamat}
              onChange={(e) => setLabelAlamat(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"No Hp"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              name="no_telp"
              placeholder="Masukkan Nomor Telepon...."
              value={noTelp}
              onChange={(e) => setNoTelp(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Provinsi"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="provinsi"
              className="form-control"
              placeholder="Masukkan Provinsi...."
              value={provinsi}
              onChange={(e) => setProvinsi(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kabupaten/Kota"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="kabupaten"
              className="form-control"
              placeholder="Masukkan Kabupaten atau Kota...."
              value={kabupaten}
              onChange={(e) => setKabupaten(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kecamatan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="kecamatan"
              className="form-control"
              placeholder="Masukkan Kecamatan...."
              value={kecamatan}
              onChange={(e) => setKecamatan(e.target.value)}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Nama Jalan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="nama_jalan"
              className="form-control"
              placeholder="Masukkan Nama Jalan...."
              value={namaJalan}
              onChange={(e) => setNamaJalan(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <LabelInput labelText={"Deskripsi"} />
            <textarea
              name="deskripsi"
              id=""
              cols="30"
              rows="6"
              className="form-control"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
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
                type={"submit"}
                onClick={handleTambahAlamat}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalFormTambahAlamat;
