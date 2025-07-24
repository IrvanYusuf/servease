import { truncateText } from "@/utils/text";
import StarRating from "@/components/atoms/StarRating";

const CardUlasanSaya = ({
  kodePemesanan,
  image,
  deskripsi,
  namaServis,
  tanggal,
  kategori,
  rate,
}) => {
  return (
    <div className="border w-100 p-3 rounded-3 shadow-sm mb-4">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div>
            <div className="d-flex column-gap-3">
              <span>
                Kode Pemesanan <b>#{truncateText({ text: kodePemesanan })}</b>
              </span>
            </div>
            <div className="d-flex flex-md-row flex-column gap-3 mt-3">
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
        <hr className="mt-3" style={{ border: "1px dashed" }} />
        <div className="">
          <div className="d-flex flex-md-row flex-column column-gap-2 align-items-md-center">
            <StarRating stars={rate} />
            <span className="text-secondary">{tanggal}</span>
          </div>
          <p className="h6 mt-md-2">{deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUlasanSaya;
