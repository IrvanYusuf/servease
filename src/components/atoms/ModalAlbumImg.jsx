import { Modal } from "react-bootstrap";

const ModalAlbumImg = (props) => {
  const imgUrl = props.albumUrl;
  console.log(props);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Body>
        <img src={imgUrl} alt="" className="w-100" />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAlbumImg;
