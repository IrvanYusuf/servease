import React, { useEffect, useState } from "react";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { Modal } from "react-bootstrap";
import "../../../styles/molecules/mitra/ModalUploadGaleri.css";
import { limitAddress } from "../../../utils/text";
import { useAuth } from "../../../context/authContext";
import { apiMitra } from "../../../api/apiMitra";
import { swal } from "../../../utils/sweetAlert";

const ModalUploadGaleri = (props) => {
  const [files, setFiles] = useState(null);
  const [filesUrl, setFilesUrl] = useState(null);
  const { idMitra, token } = useAuth();

  const handleFileChange = (e) => {
    const upload = e.target.files;
    const selectedImageArray = Array.from(upload);
    const imgArray = selectedImageArray.map((img) => {
      return URL.createObjectURL(img);
    });
    setFilesUrl(imgArray);
    setFiles(selectedImageArray);
  };

  const newObjFiles = {
    url: filesUrl,
    file: files,
  };

  const bytesToMB = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2);
  };

  const handleCancel = () => {
    setFiles("");
    setFilesUrl("");
    props.onHide();
  };

  const handleSubmitGaleri = async () => {
    const formData = new FormData();
    formData.append("image", files);
    for (let index = 0; index < files.length; index++) {
      formData.append(`image`, files[index]);
    }

    try {
      const response = await fetch(`${apiMitra}/gallery/${idMitra}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: formData,
      });
      if (response.statusText === "OK") {
        swal({
          title: "Success",
          text: "Data Berhasil Ditambahkan",
          icon: "success",
          iconColor: "#EF3D01",
          confirmButtonText: "Tutup",
        });
      }
      props.getAllGalleriesMitra();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <div className="d-flex flex-column h-100 w-100">
          <h4>Sedang Upload</h4>
          <hr />
          {files ? (
            <div className="overflow-y-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nama file</th>
                    <th>Dimensi</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {newObjFiles.url.map((url, i) => (
                    <tr key={i} className="align-middle">
                      <td>
                        <div className="d-flex align-items-center column-gap-2">
                          <img
                            src={url}
                            alt=""
                            width={"80px"}
                            height={"80px"}
                            className="rounded-2"
                          />
                          <span>{limitAddress(newObjFiles.file[i].name)}</span>
                        </div>
                      </td>
                      <td>{bytesToMB(newObjFiles.file[i].size)}MB</td>
                      <td className="text-success fw-semibold">Berhasil</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="col mb-3 d-flex flex-column align-items-center bg-body-tertiary py-5"
              style={{ border: "1.2px dashed grey" }}
            >
              <h6>Pilih file untuk mengupload</h6>
              <div>
                <label className="btn pilihFotoGaleri w-100">
                  <input
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    name="image"
                    onChange={handleFileChange}
                    multiple
                  />
                  Pilih Foto
                </label>
              </div>
            </div>
          )}
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
                type={"submit"}
                onClick={handleSubmitGaleri}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalUploadGaleri;
