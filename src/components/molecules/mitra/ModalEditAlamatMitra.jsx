import { Modal } from "react-bootstrap";
import { useState } from "react";
import LabelInput from "../../atoms/LabelInput";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonOutline from "../../atoms/ActionButtonOutline";

const ModalEditAlamatMitra = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [catataKangService, setCatatanKangService] = useState("");
  const idUser = props.user_id;
  const { idx } = props;

  const handleTambahAlamat = (e) => {
    e.preventDefault();
    alert("halo");
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form action="" onSubmit={handleTambahAlamat} noValidate>
          {idx}
          <div className="col mb-3">
            <LabelInput labelText={"Label Alamat"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Mis. Rumah / Kantor"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"No Hp"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Nomor Telepon...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Provinsi"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Provinsi...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kabupaten/Kota"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Kabupaten atau Kota...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kecamatan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Kecamatan...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Nama Jalan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Nama Jalan...."
              onChange={(e) => {
                setNoTelp(e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <LabelInput labelText={"Rincian Alamat"} />
            <textarea
              name="rincian_alamat"
              id=""
              cols="30"
              rows="6"
              className="form-control"
              onChange={(e) => setCatatanKangService(e.target.value)}
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
                type={"submit"}
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

export default ModalEditAlamatMitra;
