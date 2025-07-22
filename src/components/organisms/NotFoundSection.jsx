const NotFoundSection = () => {
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center py-3">
      <img src="/img/not-found.png" alt="" style={{ height: "80px" }} />
      <span className="fs-4 text-secondary fw-semibold">Data Not Found</span>
    </div>
  );
};

export default NotFoundSection;
