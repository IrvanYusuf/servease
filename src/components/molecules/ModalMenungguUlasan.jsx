import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// Di file komponen yang menampilkan modal
import "bootstrap/dist/css/bootstrap.min.css";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import { FaStar } from "react-icons/fa";
import { apiRating } from "../../api/apiRating";
import { useAuth } from "../../context/authContext";
import { swal } from "../../utils/sweetAlert";
import { apiTransaction } from "../../api/apiTransaction";

const ModalMenungguUlasan = (props) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [deskripsi, setDeskripsi] = useState("");
  const { token } = useAuth();
  console.log(token);

  // const [hoverValue, setHoverValue] = useState(0);
  console.log(props);

  const handleChangeStatusRating = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/rating/finish/${props.idTransaksi}`,
        {
          method: "PATCH",
          headers: {
            authorization: token,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUlasan = async () => {
    const newObj = {
      id_user: props.idUser,
      id_mitra: props.idMitra,
      rate: ratingValue,
      deskripsi: deskripsi,
    };
    try {
      const response = await fetch(`${apiRating}/user/${props.idTransaksi}`, {
        method: "POST",
        headers: {
          authorization: token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
      const data = await response.json();
      swal({
        title: "Success",
        text: "Data Berhasil Diubah",
        icon: "success",
        iconColor: "#EF3D01",
        confirmButtonText: "Tutup",
      });
      handleChangeStatusRating();
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
        <div className="px-5">
          <h3>Rating & Ulasan</h3>
        </div>
        <hr />
        <div className="px-5 mt-4">
          <form>
            <h5 className="text-secondary">
              Bagaimana kualitas layanan secara keseluruhan?
            </h5>
            <div className="d-flex column-gap-3 mt-3">
              {Array.from({ length: 5 }, (v, i) => (
                <FaStar
                  size={"30px"}
                  onClick={() => setRatingValue(i + 1)}
                  className={
                    ratingValue > i ? "text-warning" : "text-secondary"
                  }
                  onMouseOver={() => setRatingValue(i + 1)}
                />
              ))}
              {ratingValue}
            </div>
            <h5 className="text-secondary mt-4">
              Berikan ulasan untuk layanan ini
            </h5>
            <textarea
              className="form-control mt-3"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              id=""
              cols="30"
              rows="8"
              placeholder="Tulis deskripsi anda mengenai layanan ini...."
            ></textarea>
            <div className="d-flex justify-content-end column-gap-3 mt-3">
              <div>
                <ActionButtonOutline
                  text={"Batal"}
                  type={"button"}
                  onClick={props.onHide}
                />
              </div>
              <div>
                <ActionButton
                  text={"Kirim"}
                  onClick={handleUlasan}
                  type={"button"}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default ModalMenungguUlasan;
