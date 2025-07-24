import CardHistoryBooking from "@/components/molecules/CardHistoryBooking";
import NotFoundSection from "./NotFoundSection";
import { useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";
import SkeletonCardBooking from "./SkeletonCardBooking";
const SectionSelesai = () => {
  const { data: dataAllBookingsComplete, isLoading } = useQuery({
    queryKey: ["bookings-complete"],
    queryFn: () => BookingsServices.getAllBookings({ status: "completed" }),
  });

  return (
    <div className="h-100">
      <div className="d-flex flex-column align-items-center row-gap-3">
        {isLoading ? (
          <>
            <SkeletonCardBooking length={3} />
          </>
        ) : dataAllBookingsComplete?.data?.data.length === 0 ? (
          <div className="mt-5">
            <NotFoundSection />
          </div>
        ) : (
          dataAllBookingsComplete?.data?.data &&
          dataAllBookingsComplete?.data?.data.map((transaction) => (
            <CardHistoryBooking
              key={transaction._id}
              textStatus={transaction.status}
              kodePemesanan={transaction._id}
              namaMitra={transaction.service_id.name}
              kategori={transaction.service_id.category_id.name}
              idTransaksi={transaction._id}
              idMitra={transaction.partner_id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SectionSelesai;
