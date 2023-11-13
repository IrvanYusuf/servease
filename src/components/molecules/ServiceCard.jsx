import { Link } from "react-router-dom";
import "../../styles/molecules/ServiceCard.css";

function ServiceCard({ dataServices }) {
  return (
    <div className="container">
      <div className="row row-gap-4">
        {dataServices.map((data, index) => (
          <div className="col-4" key={index}>
            <div>
              <div>
                <img
                  src={data.thumbnail}
                  className="w-100 rounded-2"
                  height={213}
                  alt=""
                />
                <Link
                  to={`/detail/${data.id}`}
                  className="my-2 d-flex align-items-center column-gap-3 text-decoration-none"
                >
                  <div style={{ width: "41px", height: "41px" }}>
                    <img
                      src={data.thumbnail}
                      alt=""
                      className="w-100 h-100 bg-secondary-subtle rounded-pill object-fit-cover"
                    />
                  </div>
                  <h5 className="text-dark title-card text-decoration-none">
                    {data.name_store}
                  </h5>
                </Link>
              </div>
              <Link to={`/detail/${data.id}`} className="text-decoration-none">
                <h5 className="text-secondary">{data.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
