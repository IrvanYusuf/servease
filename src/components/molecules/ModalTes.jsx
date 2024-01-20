import React from "react";
import { Modal } from "react-bootstrap";
// Di file komponen yang menampilkan modal
import "bootstrap/dist/css/bootstrap.min.css";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";

const ModalTes = (props) => {
  console.log(props);
  return (
    <Modal
      //   size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <div className="p-3">
          <h5 className="text-center">
            Apakah anda ingin menghapus alamat ini?
          </h5>
          <div className="row justify-content-center mt-5 bo">
            <div className="col-5">
              <ActionButtonOutline text={"Batal"} onClick={props.onHide} />
            </div>
            <div className="col-5">
              <ActionButton text={"Hapus"} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalTes;
