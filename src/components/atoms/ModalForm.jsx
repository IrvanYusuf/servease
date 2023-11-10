import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ActionButtonOutline from "./ActionButtonOutline";
import ActionButton from "./ActionButton";
import LabelInput from "./LabelInput";

const ModalForm = (props) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body>
        {/* <div className="container"> */}
        <div className="row mb-3">
          <div className="col">
            <LabelInput labelText={"Nama"} />
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <LabelInput labelText={"No Telepon"} />
            <input type="text" className="form-control" />
          </div>
        </div>
        {/* <div className="d-flex border"> */}
        <div className="row mb-3">
          <div className="col">
            <LabelInput labelText={"Tanggal"} />
            <input type="date" className="form-control" />
          </div>
          <div className="col">
            <LabelInput labelText={"Waktu"} />
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="ps-0">
          <LabelInput labelText={"Deskripsi Masalah"} />
          <textarea
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="6"
          ></textarea>
        </div>
        {/* </div> */}
      </Modal.Body>
      <Modal.Footer className="border-0">
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <div className="d-flex column-gap-3">
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton onClick={props.onHide} text={"Booking"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
