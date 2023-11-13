import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { useState } from "react";

const ModalForm = (props) => {
  const [name, setName] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [descriptionProblem, setDescriptionProblem] = useState("");
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
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Nama"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nama...."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
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
          </div>
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Tanggal"} />
              <span className="text-danger"> *</span>
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Waktu"} />
              <span className="text-danger"> *</span>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="ps-0 mb-3">
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
          <div className="ps-0">
            <LabelInput labelText={"Deskripsi Masalah"} />
            <span className="text-danger"> *</span>
            <textarea
              className="form-control"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Masukkan Deskripsi Masalah...."
              required
              onChange={(e) => {
                setDescriptionProblem(e.target.value);
              }}
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton
            onClick={() => {
              alert(
                `Name: ${name}\nNo. Telp: ${noTelp}\nTanggal: ${date}\nWaktu: ${time}\nAlamat: ${address}\nDeskripsi Masalah: ${descriptionProblem}`
              );
            }}
            text={"Booking"}
            type={"submit"}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
