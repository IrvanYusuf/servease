import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
// import { useState } from "react";

const ModalFormEditUser = (props) => {
  const idUser = props.user_id;
  const { dataUser } = props;
  console.log(dataUser);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form action="" noValidate>
          <div className="row mb-3 mb-3">
            <div className="col">
              <LabelInput labelText={"Nama Depan"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.nama_depan}
                onChange={() => {}}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Nama Belakang"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.nama_belakang}
                onChange={() => {}}
                required
              />
            </div>
          </div>
          <div className="row mb-3 mb-3">
            <div className="col">
              <LabelInput labelText={"Jenis Kelamin"} />
              <span className="text-danger"> *</span>
              <select class="form-select" aria-label="Default select example">
                <option selected value={dataUser.jenis_kelamin}>
                  {dataUser.jenis_kelamin}
                </option>
                <option value={"laki-laki"}>Laki-laki</option>
                <option value={"perempuan"}>Perempuan</option>
              </select>
            </div>
            <div className="col">
              <LabelInput labelText={"Tanggal Lahir"} />
              <span className="text-danger"> *</span>
              <input
                type="date"
                value={dataUser.tanggal_lahir}
                className="form-control"
                onChange={() => {}}
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
                value={dataUser.email}
                onChange={() => {}}
                required
              />
            </div>
            <div className="col">
              <LabelInput labelText={"Nomor Handphone"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.nomor_hp}
                onChange={() => {}}
                required
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton onClick={() => {}} text={"Simpan"} type={"submit"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormEditUser;
