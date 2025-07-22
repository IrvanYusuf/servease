import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import profileImg from "@/assets/icon/profile.png";
import ActionButton from "../atoms/ActionButton";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import { apiUser } from "@/api/apiUser";
import { useAuth } from "@/context/authContext";
import { jwtDecode } from "jwt-decode";
import { swal } from "@/utils/sweetAlert";

const ModalUpdateFoto = (props) => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;

  const handleFile = (e) => {
    const upload = e.target.files[0];
    setFileUrl(URL.createObjectURL(upload));
    setFile(upload);
    console.log(upload);
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("tt", "akkakak");
    const response = await fetch(`${apiUser}/image/single/${decoded.id}`, {
      method: "PATCH",
      headers: {
        authorization: token,
        credentials: true,
      },
      body: formData,
    });
    if (response.statusText === "OK") {
      props.getSingleUser();
      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
    }
    console.log(response.statusText === "OK");
  };

  const handleClose = () => {
    setFile(null);
    setFileUrl(null);
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
        <div className="row justify-content-center">
          <div className="col-7 m-auto d-flex justify-content-center w-100">
            <form onSubmit={""} noValidate>
              <div>
                <img
                  src={fileUrl === null ? profileImg : fileUrl}
                  alt=""
                  width={"180px"}
                  height={"180px"}
                  className="rounded-pill object-fit-cover"
                />
              </div>
              <div className="mt-3">
                <label className="btn pilihFoto w-100">
                  <input
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    name="image"
                    onChange={handleFile}
                  />
                  Pilih Foto
                </label>
              </div>
              <div className="my-4 d-flex justify-content-end w-100 column-gap-2">
                <div>
                  <ActionButtonOutline
                    text={"Cancel"}
                    onClick={handleClose}
                    type={"button"}
                    className="h-100"
                  />
                </div>
                <div>
                  <ActionButton
                    text={"Simpan"}
                    onClick={handleUploadImage}
                    type={"button"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalUpdateFoto;
