import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import { swal } from "../../../utils/sweetAlert";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import ActionButton from "../../atoms/ActionButton";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiUser } from "../../../api/apiUser";

const ModalEditPasswordMitra = (props) => {
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;

  const handleSubmit = async () => {
    try {
      const newObj = {
        password_lama: passwordLama,
        password_baru: passwordBaru,
        confirm_password: confirmpassword,
      };
      const response = await fetch(`${apiUser}/password/${decoded.id}`, {
        method: "PATCH",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
      const data = await response.json();
      console.log(response);
      if (response.status !== 200) {
        setMsgError(data.message);
      } else {
        swal({
          title: "Success",
          text: "Data Berhasil Diubah",
          icon: "success",
          iconColor: "#EF3D01",
          confirmButtonText: "Tutup",
          //   timer: 1000,
        });
        setMsgError("");
        setConfirmPassword("");
        setPasswordBaru("");
        setPasswordLama("");
        props.getSingleUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setConfirmPassword("");
    setPasswordBaru("");
    setPasswordLama("");
    props.onHide();
  };
  console.log(msgError);
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
        <form noValidate>
          {msgError && (
            <div className="text-danger my-3 bg-danger-subtle p-3">
              {msgError && msgError}
            </div>
          )}
          <div className="col mb-3">
            <LabelInput labelText={"Password Lama"} />
            <span className="text-danger"> *</span>
            <input
              type="password"
              className="form-control"
              placeholder={"*****"}
              name="password_lama"
              value={passwordLama}
              onChange={(e) => setPasswordLama(e.target.value)}
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
              name="password_baru"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
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
              name="confirm_password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ModalEditPasswordMitra;
