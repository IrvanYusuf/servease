import iconRiwayatPemesananNotFound from "@/assets/icon/riwayat-pemesanan-notfound.png";
import CardBookingMenungguUlasan from "@/components/molecules/CardBookingMenungguUlasan";
import NotFoundSection from "./NotFoundSection";
import { useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";

const SectionMenungguDiulas = () => {
  const { data: dataBookingNotReviewd, isLoading } = useQuery({
    queryKey: ["bookings-not-reviewed"],
    queryFn: () => BookingsServices.getAllBookings("completed", "not_reviewed"),
  });
  return (
    <>
      {/* <pre>{JSON.stringify(dataBookingNotReviewd, null, 2)}</pre> */}
      <div className="d-flex flex-column align-items-center">
        {dataBookingNotReviewd?.data?.length === 0 ? (
          <div className="mt-5">
            <NotFoundSection />
          </div>
        ) : dataBookingNotReviewd?.data?.length > 0 ? (
          dataBookingNotReviewd?.data?.map((review, i) => (
            <CardBookingMenungguUlasan
              key={review._id}
              kode_pemesanan={review._id}
              namaServis={review.service_id.name}
              kategori={review.service_id.category_id.name}
              image={review.service_id.thumbnail}
              idBooking={review._id}
              idService={review.service_id._id}
            />
          ))
        ) : (
          <div
            className="w-100 d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <div className="d-flex flex-column align-items-center row-gap-3">
              <img src={iconRiwayatPemesananNotFound} alt="" />
              <h5>Kamu belum pernah melakukan pesanan</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionMenungguDiulas;
