import { FaStar } from "react-icons/fa";

const RatingProgressBar = ({ rating, totalRatings }) => {
  const percentage = (rating / 5) * 100;

  return (
    <div className="d-flex align-items-center">
      <div>
        <FaStar className="text-warning" />
        <span>{rating}</span>
      </div>
      <div className="progress ml-2" style={{ width: "200px" }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={rating}
          aria-valuemin="0"
          aria-valuemax="5"
        ></div>
      </div>
      <span className="ml-2">({totalRatings})</span>
    </div>
  );
};

const RatingProgressBar2 = () => {
  return <RatingProgressBar rating={4.5} totalRatings={2} />;
};

export default RatingProgressBar2;
