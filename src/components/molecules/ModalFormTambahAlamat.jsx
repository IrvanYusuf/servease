import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { useState } from "react";

const ModalFormTambahAlamat = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const idUser = props.user_id;

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form action="" noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Nama"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Mis. Rumah / Kantor"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Alamat"} />
            <span className="text-danger"> *</span>
            <textarea
              className="form-control"
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Masukkan Alamat Anda...."
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="col">
            <LabelInput labelText={"No Telepon"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Nomor Telepon...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton
            onClick={() => {
              alert(`Name: ${name}\nAlamat: ${address}\nNo. Telp: ${noTelp}`);
            }}
            text={"Booking"}
            type={"submit"}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormTambahAlamat;
