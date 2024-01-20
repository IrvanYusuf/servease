import React from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import { swal } from "../../../utils/sweetAlert";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import ActionButton from "../../atoms/ActionButton";

const ModalEditPasswordMitra = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Success",
      text: "Data Berhasil Diubah",
      icon: "success",
      iconColor: "#EF3D01",
      confirmButtonText: "Tutup",
      //   timer: 1000,
    });
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3>Edit Password</h3>
        <hr />
        <form noValidate onSubmit={handleSubmit}>
          <div className="col mb-3">
            <LabelInput labelText={"Password Lama"} />
            <span className="text-danger"> *</span>
            <input
              type="password"
              className="form-control"
              placeholder={"*****"}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Password Baru"} />
            <span className="text-danger"> *</span>
            <input
              type="password"
              className="form-control"
              placeholder={"*****"}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Konfirmasi Password"} />
            <span className="text-danger"> *</span>
            <input
              type="password"
              className="form-control"
              placeholder={"*****"}
              required
            />
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
                // type={"submit"}
                // onClick={handleTambahAlamat}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalEditPasswordMitra;
