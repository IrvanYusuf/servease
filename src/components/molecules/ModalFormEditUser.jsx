import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { swal } from "../../utils/sweetAlert.js";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { apiUser } from "../../api/apiUser.js";
import { useAuth } from "../../context/authContext";
// import { useState } from "react";

const ModalFormEditUser = (props) => {
  const { dataUser } = props;
  // const [updateUser, setUpdateUser] = useState([]);
  const [username, setUsername] = useState("");
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [jenis_kelamin, setJenisKelamin] = useState();
  const [tanggal_lahir, setTanggalLahir] = useState();
  const [no_telp, setNoTelp] = useState();
  const { token } = useAuth();

  const decoded = token ? jwtDecode(token) : null;

  const getSingleUser = async () => {
    const response = await fetch(`${apiUser}/detail/${parseInt(decoded.id)}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: token,
        credentials: true,
      },
    });
    const data = await response.json();
    const [result] = data.data;
    setUsername(result.username);
    setNama(result.nama);
    setEmail(result.email);
    setJenisKelamin(result.jenis_kelamin);
    setNoTelp(result.no_telp);
    const originalDate = result.tanggal_lahir;
    const formattedDate = new Date(originalDate).toISOString().split("T")[0];
    setTanggalLahir(formattedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUser}/${decoded.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: token,
          credentials: true,
        },
        body: JSON.stringify({
          username: username,
          nama: nama,
          email: email,
          tanggal_lahir: tanggal_lahir,
          jenis_kelamin: jenis_kelamin,
          no_telp: no_telp,
        }),
      });
      if (response.statusText === "OK") {
        swal({
          title: "Success",
          text: "Data Berhasil Diubah",
          icon: "success",
          iconColor: "#EF3D01",
          confirmButtonText: "Tutup",
        });
        props.getSingleUser();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form noValidate>
          <div className="row mb-3 mb-3">
            <div className="col">
              <LabelInput labelText={"Username"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Nama"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3 mb-3">
            <div className="col">
              <LabelInput labelText={"Jenis Kelamin"} />
              <span className="text-danger"> *</span>
              <select
                class="form-select"
                aria-label="Default select example"
                value={jenis_kelamin}
                onChange={(e) => setJenisKelamin(e.target.value)}
              >
                <option value={"Pria"}>Pria</option>
                <option value={"Wanita"}>Wanita</option>
              </select>
            </div>
            <div className="col">
              <LabelInput labelText={"Tanggal Lahir"} />
              <span className="text-danger"> *</span>
              <input
                type="date"
                className="form-control"
                value={tanggal_lahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3 mb-3">
            <div className="col">
              <LabelInput labelText={"Email"} />
              <span className="text-danger"> *</span>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Nomor Handphone"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={no_telp}
                onChange={(e) => setNoTelp(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ActionButtonOutline
            onClick={props.onHide}
            type={"button"}
            text={"Cancel"}
          />
          <ActionButton
            text={"Simpan"}
            type={"button"}
            onClick={handleSubmit}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormEditUser;
