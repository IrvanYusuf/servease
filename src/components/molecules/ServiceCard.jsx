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
                  src={`http://localhost:3000/images/${data.image}`}
                  className="w-100 rounded-2"
                  height={213}
                  alt=""
                />
              </Link>

              <Link to={"/mitra-beranda/1"} className="text-decoration-none">
                <div className="my-2 d-flex align-items-center column-gap-3">
                  <div style={{ width: "41px", height: "41px" }}>
                    <img
                      src={`http://localhost:3000/images/${data.image}`}
                      alt=""
                      className="w-100 h-100 bg-secondary-subtle rounded-pill object-fit-cover"
                    />
                  </div>
                  <h5 className="text-dark title-card text-decoration-none">
                    {data.nama_servis}
                  </h5>
                </div>
              </Link>
              {/* <div className="d-flex align-items-center column-gap-2">
                <FiMapPin /> {data.address && limitAddress(data.address)}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
