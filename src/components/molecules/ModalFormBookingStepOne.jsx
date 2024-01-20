import LabelInput from "../atoms/LabelInput";

const ModalFormBookingStepOne = (props) => {
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
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Keluhan 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheck2"
              />
              <label className="form-check-label" htmlFor="flexCheck2">
                Keluhan 2
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheck3"
              />
              <label className="form-check-label" htmlFor="flexCheck3">
                Keluhan 3
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
                name="properti"
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
                name="properti"
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
                name="properti"
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
                name="flexRadioDefault"
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
                name="flexRadioDefault"
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
