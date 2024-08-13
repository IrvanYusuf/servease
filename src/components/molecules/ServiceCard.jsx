import { Link } from "react-router-dom";
import "../../styles/molecules/ServiceCard.css";
import { FiMapPin } from "react-icons/fi";
import { limitAddress } from "../../utils/text";

function ServiceCard({ dataServices }) {
  console.log(dataServices);
  return (
    <div className="container">
      <div className="row row-gap-5">
        {dataServices.map((data, index) => (
          <div className="col-4" key={index}>
            <div>
              <Link
                to={`/detail/${data.id_mitra}`}
                className="text-decoration-none"
              >
                <img
                  src={`https://backend-servease.vercel.app/images/${data.image}`}
                  className="w-100 rounded-2"
                  height={213}
                  alt=""
                />
              </Link>

              <div className="my-2 d-flex align-items-center column-gap-3">
                <div style={{ width: "41px", height: "41px" }}>
                  <img
                    src={`https://backend-servease.vercel.app/images/${data.image}`}
                    alt=""
                    className="w-100 h-100 bg-secondary-subtle rounded-pill object-fit-cover"
                  />
                </div>
                <Link
                  to={`/detail/${data.id_mitra}`}
                  className="text-decoration-none"
                >
                  <h5 className="text-dark title-card text-decoration-none">
                    {data.nama_servis}
                  </h5>
                </Link>
              </div>
              <div className="d-flex align-items-center column-gap-2">
                <FiMapPin /> {data.nama_jalan && limitAddress(data.nama_jalan)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
