import { Card } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";

const CardOverview = ({ text, value }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <span>{text}</span>
          <HiDotsHorizontal size={22} style={{ cursor: "pointer" }} />
        </div>
        <span className="fs-2 fw-bold">{value}</span>
      </Card.Body>
    </Card>
  );
};

export default CardOverview;
