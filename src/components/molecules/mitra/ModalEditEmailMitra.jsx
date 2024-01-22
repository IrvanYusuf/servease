import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import { swal } from "../../../utils/sweetAlert";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import ActionButton from "../../atoms/ActionButton";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiUser } from "../../../api/apiUser";

const ModalEditEmailMitra = (props) => {
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [email, setEmail] = useState("");

  const getSingleUser = async () => {
    try {
      const response = await fetch(`${apiUser}/detail/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const [result] = data.data;
      setEmail(result.email);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    const response = await fetch(`${apiUser}/email/${decoded.id}`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const { data } = await response.json();
    if (data.affectedRows > 0) {
      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
      props.getSingleUser();
    }
  };

  const handleChange = () => {
    setEmail("");
    props.onHide();
  };

  useEffect(() => {
    getSingleUser();
  }, [props.show]);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <h3>Edit Email</h3>
        <hr />
        <form noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"email"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={handleChange}
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

export default ModalEditEmailMitra;
