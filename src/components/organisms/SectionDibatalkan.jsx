import CardHistoryBooking from "@/components/molecules/CardHistoryBooking";
import NotFoundSection from "./NotFoundSection";
import SkeletonCardBooking from "./SkeletonCardBooking";
import { useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";
const SectionDibatalkan = () => {
  const { data: dataAllConfirmBookings, isLoading } = useQuery({
    queryKey: ["bookings-cancelled"],
    queryFn: () => BookingsServices.getAllBookings({ status: "cancelled" }),
  });
  return (
    <div className="h-100">
      <div className="d-flex flex-column align-items-center row-gap-3">
        {isLoading ? (
          <>
            <SkeletonCardBooking length={3} />
          </>
        ) : dataAllConfirmBookings?.data?.data.length === 0 ? (
          <div className="mt-5">
            <NotFoundSection />
          </div>
        ) : (
          dataAllConfirmBookings?.data?.data &&
          dataAllConfirmBookings?.data?.data.map((transaction) => (
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

export default SectionDibatalkan;
