import { Modal } from "react-bootstrap";
import ActionButtonOutline from "./ActionButtonOutline";
import ActionButton from "./ActionButton";
import LabelInput from "./LabelInput";
import { useState } from "react";

const ModalForm = (props) => {
  const [deskripsiMasalah, setDeskripsiMasalah] = useState("");
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
                onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Waktu"} />
              <span className="text-danger"> *</span>
              <input
                type="time"
                className="form-control"
                onChange={() => {}}
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
              onChange={() => {}}
              required
            ></textarea>
          </div>
          <div className="ps-0">
            <div>{deskripsiMasalah}</div>
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
                setDeskripsiMasalah(e.target.value);
              }}
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton onClick={() => {}} text={"Booking"} type={"submit"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
