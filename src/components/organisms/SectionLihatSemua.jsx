import CardHistoryBooking from "@/components/molecules/CardHistoryBooking";
import NotFoundSection from "./NotFoundSection";
import { useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";
import { Placeholder } from "react-bootstrap";
import SkeletonCardBooking from "./SkeletonCardBooking";

const SectionLihatSemua = () => {
  const { data: dataAllBookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => BookingsServices.getAllBookings(""),
  });

  return (
    <div>
      <div className="d-flex flex-column align-items-center row-gap-3">
        {isLoading ? (
          <>
            <SkeletonCardBooking length={3} />
          </>
        ) : dataAllBookings?.data?.length === 0 ? (
          <div className="mt-5">
            <NotFoundSection />
          </div>
        ) : (
          dataAllBookings?.data &&
          dataAllBookings?.data?.map((transaction) => (
            <CardHistoryBooking
              key={transaction._id}
              textStatus={transaction.status}
              kodePemesanan={transaction._id}
              namaMitra={transaction.partner_id.name}
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

export default SectionLihatSemua;
