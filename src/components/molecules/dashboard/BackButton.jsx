import { Card } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BackButton = ({ path, showBack = false, text }) => {
  return (
    <div className="d-flex align-items-end gap-2">
      {showBack && (
        <Card className="py-1 px-2">
          <Link to={path}>
            <FaArrowLeftLong className="text-secondary" />
          </Link>
        </Card>
      )}

      <h5>{text}</h5>
    </div>
  );
};

export default BackButton;
