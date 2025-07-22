import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";

const CardAlamat = ({
  address,
  handleShowModalEditAlamat,
  handleDeleteAddress,
  handlePrimaryAddress,
  showAction = true,
}) => {
  return (
    <div
      className="shadow p-3 rounded-3 mb-4"
      style={{
        border: `1px solid ${address?.isPrimary ? "#EF3D01" : "#D0D4CA"}`,
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <b
          className={!address?.isPrimary ? "text-secondary" : null}
          style={{ color: address?.isPrimary ? "#EF3D01" : null }}
        >
          {address?.label_alamat}
        </b>
        <button
          className="border-0 bg-transparent fw-semibold"
          style={{ color: "#EF3D01" }}
          onClick={() => handleShowModalEditAlamat(address?._id)}
        >
          Ubah
        </button>
      </div>
      <h6 className="fw-normal">{address?.phone}</h6>
      <div className="d-flex">
        <h6 className="fw-normal">{address?.street_name},</h6>
      </div>
      <h6 className="fw-normal">{address?.description}</h6>
      <div className="d-flex gap-1">
        <h6 className="fw-normal">{address?.city},</h6>
        <h6 className="fw-normal"> {address?.district},</h6>
        <h6 className="fw-normal"> {address?.province}</h6>
      </div>
      {showAction && (
        <div className="d-flex justify-content-end mt-3">
          {!address.isPrimary && (
            <ActionButtonOutline
              onClick={() => handlePrimaryAddress(address?._id)}
              text={"Atur Sebagai Utama"}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CardAlamat;
