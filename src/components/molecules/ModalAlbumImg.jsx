import { Modal } from "react-bootstrap";
import "../../styles/atoms/modalAlbumImg.css";

const ModalAlbumImg = (props) => {
  const imgUrl = props.albumUrl;
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <img
          src={`http://localhost:3000/images/gallery/${imgUrl}`}
          alt=""
          className="w-100 modal-img"
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAlbumImg;
