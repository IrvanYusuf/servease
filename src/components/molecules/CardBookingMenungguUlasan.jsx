import ActionButton from "@/components/atoms/ActionButton";
import { truncateText } from "@/utils/text";
import { Link } from "react-router-dom";

const CardBookingMenungguUlasan = ({
  kode_pemesanan,
  image,
  namaServis,
  kategori,
  idBooking,
  idService,
}) => {
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div>
            <div className="d-flex column-gap-3">
              <span>
                Kode Pemesanan <b>#{truncateText({ text: kode_pemesanan })}</b>
              </span>
            </div>
            <div className="d-flex flex-md-row flex-column gap-3 mt-3 w-100">
              <img
                src={image}
                alt=""
                className="rounded-3 d-none d-md-block"
                width={"80px"}
              />
              <img
                src={image}
                alt=""
                className="rounded-3 d-block d-md-none w-100 object-fit-cover"
                height={"120px"}
              />
              <div>
                <b>{namaServis}</b>
                <h6>{kategori}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="d-flex flex-column justify-content-md-end align-items-md-end w-100 h-100">
            <div className="d-flex d-md-none column-gap-3 align-items-center w-100">
              <Link
                className="w-100"
                to={`/review?booking_id=${idBooking}&service_id=${idService}`}
              >
                <ActionButton text={"Beri Ulasan"} className="w-100" />
              </Link>
            </div>
            <div className="d-none d-md-flex column-gap-3 align-items-center">
              <Link
                to={`/review?booking_id=${idBooking}&service_id=${idService}`}
              >
                <ActionButton text={"Beri Ulasan"} className="w-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBookingMenungguUlasan;
