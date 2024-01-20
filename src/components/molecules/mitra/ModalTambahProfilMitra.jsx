import React from "react";
import { Modal } from "react-bootstrap";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";
import { swal } from "../../../utils/sweetAlert";
import { useNavigate } from "react-router-dom";

const ModalTambahProfilMitra = (props) => {
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
    // setTimeout(() => {
    //   props.onHide();
    // }, 1000);
  };
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form noValidate onSubmit={handleSubmit}>
          <div className="col mb-3">
            <LabelInput labelText={"Nama Servis"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Mis. Rumah / Kantor"
              value={"Rumah"}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Logo"} />
            <span className="text-danger"> *</span>
            <input type="file" className="form-control" required />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kategori"} />
            <span className="text-danger"> *</span>
            <select
              className="form-select"
              aria-label="Default select example"
              //   hidden
            >
              {/* <option selected>Open this select menu</option> */}
              <option value="AC" disabled selected hidden>
                Pilih Kategori
              </option>
              <option value="AC">AC</option>
              <option value="PC">PC</option>
              <option value="Lampu">Lampu</option>
              <option value="Mesin Cuci">Mesin Cuci</option>
              <option value="Smartphone">Smartphone</option>
              <option value="TV">TV</option>
              <option value="Rumah">Rumah</option>
            </select>
          </div>
          <div className="col">
            <LabelInput labelText={"Deskripsi"} />
            <textarea
              name="deskripsi"
              id=""
              cols="30"
              rows="6"
              className="form-control"
              //   value={"Rumah warna merah logo banteng"}
            ></textarea>
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

export default ModalTambahProfilMitra;
