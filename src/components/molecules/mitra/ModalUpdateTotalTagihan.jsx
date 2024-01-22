import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { apiTransaction } from "../../../api/apiTransaction";
import { useAuth } from "../../../context/authContext";

const ModalUpdateTotalTagihan = (props) => {
  const [totalTagihan, setTotalTagihan] = useState("");
  const { token } = useAuth();

  const getInvoiceDetail = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/invoice/detail/${props.idTransaksi}`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      const [result] = data;
      setTotalTagihan(result.total_tagihan);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const newObj = { total_tagihan: totalTagihan };
    const response = await fetch(
      `${apiTransaction}/invoice/nominal/${props.idTransaksi}`,
      {
        method: "PATCH",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(newObj),
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(response);
    swal({
      title: "Success",
      text: "Data Berhasil Diubah",
      icon: "success",
      iconColor: "#EF3D01",
      confirmButtonText: "Tutup",
      //   timer: 1000,
    });
    props.getInvoiceDetail();
  };

  const handleCancel = () => {
    setTotalTagihan("");
    props.onHide();
  };

  useEffect(() => {
    getInvoiceDetail();
  }, [props.show]);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3>Edit Nominal Tagihan</h3>
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

export default ModalUpdateTotalTagihan;
