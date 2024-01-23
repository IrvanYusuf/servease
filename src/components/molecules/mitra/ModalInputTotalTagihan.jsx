import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { apiTransaction } from "../../../api/apiTransaction";
import { useAuth } from "../../../context/authContext";

const ModalInputTotalTagihan = (props) => {
  const { totalTagihan, setTotalTagihan } = props;

  const handleSubmit = async () => {
    const newObj = { total_tagihan: totalTagihan };
    props.onHide();
  };

  const handleCancel = () => {
    setTotalTagihan("");
    props.onHide();
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3>Input Nominal Tagihan</h3>
        <hr />
        <form noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Total Tagihan"} />
            <span className="text-danger"> *</span>
            <input
              type="number"
              className="form-control"
              placeholder="Input seluruh total tagihan...."
              name="total_tagihan"
              value={totalTagihan}
              onChange={(e) => setTotalTagihan(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={handleCancel}
                type={"button"}
                text={"Batal"}
              />
            </div>
            <div>
              <ActionButton
                text={"Simpan"}
                type={"button"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalInputTotalTagihan;
