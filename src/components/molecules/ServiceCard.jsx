import { Link } from "react-router-dom";
import "@/styles/molecules/ServiceCard.css";
import { FiMapPin } from "react-icons/fi";
import { Placeholder } from "react-bootstrap";
import NotFoundSection from "@/components/organisms/NotFoundSection";

function ServiceCard({ dataServices, isLoading }) {
  return (
    <div className="container" style={{ minHeight: "50vh" }}>
      <div className="row row-gap-5">
        {isLoading ? (
          <SkeletonListServices />
        ) : dataServices?.data?.length < 1 ? (
          <NotFoundSection />
        ) : (
          dataServices?.data &&
          dataServices.data.map((data, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div>
                <Link
                  to={`/detail/${data._id}`}
                  className="text-decoration-none"
                >
                  <img
                    src={data.thumbnail}
                    className="rounded-2 object-fit-cover"
                    style={{ height: 213, width: "100%", aspectRatio: "1/1" }}
                    alt=""
                  />
                </Link>

                <div className="my-2 d-flex align-items-center column-gap-3">
                  <div style={{ width: "41px", height: "41px" }}>
                    <img
                      src={data.thumbnail}
                      alt={data.name}
                      className="w-100 h-100 bg-secondary-subtle rounded-pill object-fit-cover"
                    />
                  </div>
                  <Link
                    to={`/detail/${data._id}`}
                    className="text-decoration-none"
                  >
                    <h5 className="text-dark title-card text-decoration-none">
                      {data.name}
                    </h5>
                  </Link>
                </div>
                <div className="d-flex align-items-center column-gap-2">
                  <FiMapPin /> Jl. {data?.partner_id?.district}{" "}
                  {data?.partner_id?.city}, {data?.partner_id?.province}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ServiceCard;

function SkeletonListServices({ length = 6 }) {
  return (
    <>
      {Array.from({ length }).map((_, index2) => (
        <div className="col-lg-4 col-md-6 col-12" key={index2}>
          <Placeholder as="div" animation="glow">
            <Placeholder
              style={{ height: "200px", width: "100%" }}
              className="rounded"
            />
            <div className="d-flex mt-2 gap-3 align-items-center">
              <Placeholder
                style={{ height: "41px", width: "41px" }}
                className="rounded-pill"
              />
              <Placeholder
                style={{ height: "10px", width: "100%" }}
                className="rounded"
              />
            </div>
            <Placeholder
              style={{ height: "10px", width: "60%" }}
              className="rounded mt-3"
            />
          </Placeholder>
        </div>
      ))}
    </>
  );
}
