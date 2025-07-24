import { Fragment } from "react";
import { Placeholder } from "react-bootstrap";

const SkeletonDaftarAlamat = ({ length = 3 }) => {
  return (
    <Fragment>
      {Array.from({ length }).map((_, idx) => (
        <Placeholder as="div" animation="glow" key={idx} className="w-100">
          <Placeholder
            style={{ height: "140px", width: "100%" }}
            className="rounded"
          />
        </Placeholder>
      ))}
    </Fragment>
  );
};

export default SkeletonDaftarAlamat;
