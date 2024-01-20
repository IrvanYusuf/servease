import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import { useState } from "react";
import ModalFormBookingStepOne from "../molecules/ModalFormBookingStepOne";
import ModalFormBookingStepTwo from "../molecules/ModalFormBookingStepTwo";

const ModalFormBooking = (props) => {
  const [showModalBooking, setShowModalBooking] = useState(0);
  const [formBooking, setFormBooking] = useState({
    keluhan: [],
    jenis_properti: [],
    tangga: "",
    nama: "",
    no_telp: "",
    tanggal: "",
    waktu: "",
    alamat: "",
    deskripsi_masalah: "",
  });

  const ModalBookingDisplay = () => {
    if (showModalBooking === 0) {
      return (
        <ModalFormBookingStepOne
          formBooking={formBooking}
          setFormBooking={setFormBooking}
        />
      );
    } else if (showModalBooking === 1) {
      return (
        <ModalFormBookingStepTwo
          formBooking={formBooking}
          setFormBooking={setFormBooking}
        />
      );
    }
  };

  const nextModalBooking = () => {
    setShowModalBooking(1);
  };
  const prevModalBooking = () => {
    setShowModalBooking(0);
  };

  const ButtonBookingDisplay = () => {
    if (showModalBooking === 0) {
      return (
        <>
          <ActionButtonOutline onClick={props.onHide} text={"Cancel"} />
          <ActionButton
            onClick={nextModalBooking}
            text={"Selanjutnya"}
            type={"button"}
          />
        </>
      );
    } else if (showModalBooking === 1) {
      return (
        <>
          <ActionButtonOutline onClick={prevModalBooking} text={"Kembali"} />
          <ActionButton onClick={() => {}} text={"Booking"} type={"submit"} />
        </>
      );
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
        <form action="" noValidate>
          <ModalBookingDisplay />
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <ButtonBookingDisplay />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormBooking;
