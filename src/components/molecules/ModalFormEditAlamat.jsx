import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { useEffect, useState } from "react";
import { apiAddress } from "../../api/apiAddress";
import { useAuth } from "../../context/authContext";
import { swal } from "../../utils/sweetAlert";
import { jwtDecode } from "jwt-decode";

const ModalFormEditAlamat = (props) => {
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const { idAddress } = props;
  const [labelAlamat, setLabelAlamat] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [namaJalan, setNamaJalan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleEditAlamat = (e) => {
    e.preventDefault();
    swal({
      title: "Success",
      text: "Data Berhasil Diubah",
      icon: "success",
      iconColor: "#EF3D01",
      confirmButtonText: "Tutup",
    });
  };

  const getSingleAddress = async () => {
    try {
      const response = await fetch(`${apiAddress}/detail/${idAddress}`, {
        headers: {
          authorization: token,
          "Content-type": "application/json",
          credentials: true,
        },
        method: "GET",
      });
      const data = await response.json();
      const [result] = await data.data;
      setLabelAlamat(result.label_alamat);
      setNoTelp(result.no_telp);
      setDeskripsi(result.deskripsi);
      setNamaJalan(result.nama_jalan);
      setKabupaten(result.kabupaten);
      setKecamatan(result.kecamatan);
      setProvinsi(result.provinsi);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = async (e) => {
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
    const response = await fetch(`${apiAddress}/${props.idAddress}`, {
      headers: {
        authorization: token,
        "Content-type": "application/json",
        credentials: true,
      },
      method: "PATCH",
      body: JSON.stringify(newAddress),
    });
    swal({
      title: "Success",
      text: "Data Berhasil Ditambahkan",
      icon: "success",
      iconColor: "#EF3D01",
      confirmButtonText: "Tutup",
    });
  };

  useEffect(() => {
    getSingleAddress();
  }, [props.idAddress]);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form onSubmit={updateAddress} noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Label Alamat"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
              placeholder="Masukkan Nama Jalan...."
              value={namaJalan}
              onChange={(e) => setNamaJalan(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <LabelInput labelText={"Rincian Alamat"} />
            <textarea
              name="rincian_alamat"
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
                onClick={updateAddress}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalFormEditAlamat;
