import { useState } from "react";
import LabelInput from "../atoms/LabelInput";

const ModalFormBookingStepOne = ({
  setSelectedProperti,
  selectedProperti,
  setSelectedTangga,
  selectedTangga,
  keluhan,
  setKeluhan,
}) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    // Buat salinan array keluhan saat ini
    // const updatedKeluhan = [...formBooking.keluhan];
    const updatedKeluhan = [...keluhan];

    if (checked) {
      // Tambahkan nilai ke dalam array jika dicentang
      updatedKeluhan.push(value);
    } else {
      // Hapus nilai dari array jika tidak dicentang
      const index = updatedKeluhan.indexOf(value);
      if (index !== -1) {
        updatedKeluhan.splice(index, 1);
      }
    }

    // Perbarui state formBooking dengan array keluhan yang baru
    // handleFormBooking({ target: { name: "keluhan", value: updatedKeluhan } });
    setKeluhan(updatedKeluhan);
  };
  const handleRadioChangeProperti = (e) => {
    const { value } = e.target;
    setSelectedProperti(value);
    // handleFormBooking({ target: { name: "jenis_properti", value } });
  };

  const handleRadioChangeTangga = (e) => {
    const { value } = e.target;
    setSelectedTangga(value);
    // handleFormBooking({ target: { name: "tangga", value } });
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Keluhan/Masalah AC"} />
          <span className="text-danger"> *</span>
          <div className="d-grid row-gap-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={"Ac rusak"}
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
                checked={keluhan.includes("Ac rusak")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ac Rusak
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Pembersihan Ac"
                onChange={handleCheckboxChange}
                checked={keluhan.includes("Pembersihan Ac")}
                id="flexCheck2"
              />
              <label className="form-check-label" htmlFor="flexCheck2">
                Pembersihan Ac
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Perawatan"
                onChange={handleCheckboxChange}
                checked={keluhan.includes("Perawatan")}
                id="flexCheck3"
              />
              <label className="form-check-label" htmlFor="flexCheck3">
                Perawatan
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Jenis Properti Anda"} />
          <span className="text-danger"> *</span>
          <div className="d-grid row-gap-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="jenis_properti"
                value={"rumah"}
                checked={selectedProperti === "rumah"}
                onChange={handleRadioChangeProperti}
                id="rumah"
              />
              <label className="form-check-label" htmlFor="rumah">
                Rumah
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={"apartemen"}
                checked={selectedProperti === "apartemen"}
                name="jenis_properti"
                onChange={handleRadioChangeProperti}
                id="apartemen"
              />
              <label className="form-check-label" htmlFor="apartemen">
                Apartemen
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="jenis_properti"
                value={"lainnya"}
                checked={selectedProperti === "lainnya"}
                onChange={handleRadioChangeProperti}
                id="lainnya"
              />
              <label className="form-check-label" htmlFor="lainnya">
                Lainnya
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <LabelInput labelText={"Apakah Teknisi perlu membawa tangga"} />
          <span className="text-danger"> *</span>
          <div className="d-grid row-gap-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tangga"
                value={"ya"}
                onChange={handleRadioChangeTangga}
                checked={selectedTangga === "ya"}
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Ya
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tangga"
                value={"tidak"}
                onChange={handleRadioChangeTangga}
                checked={selectedTangga === "tidak"}
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Tidak
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFormBookingStepOne;
