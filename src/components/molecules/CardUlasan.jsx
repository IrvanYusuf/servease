import "@/styles/molecules/cardUlasan.css";
import StarRating from "@/components/atoms/StarRating";
import profileImg from "@/assets/icon/profile.png";
const CardUlasan = ({ reviewText, reviewImgUser, nama = "Anonymus", star }) => {
  return (
    <div className="border-bottom shadow-sm p-3 rounded-3 mb-5">
      <div className="vstack gap-3">
        <div className="d-flex align-items-center column-gap-5">
          <StarRating stars={star} />
          <span className="text-secondary">1 hari yang lalu</span>
        </div>
        <div className="d-flex align-items-center column-gap-3">
          <div className="img-user-review-container">
            <img
              src={reviewImgUser ? reviewImgUser : profileImg}
              className="w-100 h-100 rounded-circle"
              alt=""
            />
          </div>
          <h5 className="name-user-review-container">{nama}</h5>
        </div>
        <div>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUlasan;
