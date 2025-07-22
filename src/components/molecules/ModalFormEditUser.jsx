import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import LabelInput from "../atoms/LabelInput";
import { swal } from "@/utils/sweetAlert.js";
import { formatDateInput } from "@/utils/formatDateInput";

const ModalFormEditUser = ({ dataUser, show, onHide }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Body>
        <form noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Username"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.data.username}
                // onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Nama"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.data.name}
                // onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Jenis Kelamin"} />
              <span className="text-danger"> *</span>
              <select
                class="form-select"
                aria-label="Default select example"
                value={dataUser.data.gender}
                // onChange={(e) => setJenisKelamin(e.target.value)}
              >
                <option value={"MALE"}>Pria</option>
                <option value={"FEMALE"}>Wanita</option>
              </select>
            </div>
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Tanggal Lahir"} />
              <span className="text-danger"> *</span>
              <input
                type="date"
                className="form-control"
                value={formatDateInput({ isoDate: dataUser.data.birthDate })}
                // onChange={(e) => setTanggalLahir(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Email"} />
              <span className="text-danger"> *</span>
              <input
                type="email"
                className="form-control"
                value={dataUser.data.email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-lg-6 col-12 mb-3">
              <LabelInput labelText={"Nomor Handphone"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                value={dataUser.data.phone}
                // onChange={(e) => setNoTelp(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={onHide}
                type={"button"}
                text={"Cancel"}
                className="h-100"
              />
            </div>
            <ActionButton text={"Simpan"} type={"submit"} />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFormEditUser;
