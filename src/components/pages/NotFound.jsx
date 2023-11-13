import React from "react";
import "../../styles/pages/notFound.css";
import ButtonLink from "../atoms/ButtonLink";

const NotFound = () => {
  return (
    <div className="container container-not-found d-flex flex-column justify-content-center align-items-center">
      <h1>404</h1>
      <h4 className="text-secondary">Pages Not Found</h4>
      <div className="mt-3">
        <ButtonLink path={"/"} text={"back to home"} />
      </div>
    </div>
  );
};

export default NotFound;
