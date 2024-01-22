import { useState } from "react";
import LabelInput from "../atoms/LabelInput";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";

const ModalFormBookingStepTwo = (props) => {
  const [nama, setNama] = useState("");
  const handleName = (e) => {
    e.preventDefault();
    setNama(e.target.value);
    props.setNama(e.target.value);
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          {nama}
          <LabelInput labelText={"Nama"} />
          <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nama...."
            name="nama"
            value={nama}
            onChange={handleName}
            // required
          />
        </div>
        {/* <div className="col">
          <LabelInput labelText={"No Telepon"} />
          <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan Nomor Telepon...."
            name="no_telp"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />
        </div> */}
      </div>
      {/* <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Tanggal"} />
          <span className="text-danger"> *</span>
          <input
            type="date"
            className="form-control"
            name="tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <LabelInput labelText={"Waktu"} />
          <span className="text-danger"> *</span>
          <input
            type="time"
            className="form-control"
            name="waktu"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
            required
          />
        </div>
      </div> */}
      {/* <div className="ps-0 mb-3">
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
      </div> */}
      {/* <div className="ps-0">
        <LabelInput labelText={"Deskripsi Masalah"} />
        <span className="text-danger"> *</span>
        <textarea
          className="form-control"
          name="deskripsi_masalah"
          value={deskripsiMasalah}
          onChange={(e) => setDeskripsiMasalah(e.target.value)}
          id=""
          cols="30"
          rows="10"
          placeholder="Masukkan Deskripsi Masalah...."
          required
        ></textarea>
      </div> */}
      <>
        <ActionButtonOutline onClick={""} text={"Kembali"} />
        <ActionButton onClick={""} text={"Booking"} type={"submit"} />
      </>
    </>
  );
};

export default ModalFormBookingStepTwo;
