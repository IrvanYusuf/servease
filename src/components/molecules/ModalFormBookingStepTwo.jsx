import LabelInput from "../atoms/LabelInput";

const ModalFormBookingStepTwo = (props) => {
  // const idUser = props.user_id;
  console.log(props);
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Nama"} />
          <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nama...."
            // value={form}
            required
          />
        </div>
        <div className="col">
          <LabelInput labelText={"No Telepon"} />
          <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nomor Telepon...."
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Tanggal"} />
          <span className="text-danger"> *</span>
          <input type="date" className="form-control" required />
        </div>
        <div className="col">
          <LabelInput labelText={"Waktu"} />
          <span className="text-danger"> *</span>
          <input type="time" className="form-control" required />
        </div>
      </div>
      <div className="ps-0 mb-3">
        <LabelInput labelText={"Alamat"} />
        <span className="text-danger"> *</span>
        <textarea
          className="form-control"
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Masukkan Alamat Anda...."
          required
        ></textarea>
      </div>
      <div className="ps-0">
        <LabelInput labelText={"Deskripsi Masalah"} />
        <span className="text-danger"> *</span>
        <textarea
          className="form-control"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Masukkan Deskripsi Masalah...."
          required
        ></textarea>
      </div>
    </>
  );
};

export default ModalFormBookingStepTwo;
