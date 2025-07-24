import { useQuery } from "@tanstack/react-query";
import CardHistoryBooking from "../molecules/CardHistoryBooking";
import NotFoundSection from "./NotFoundSection";
import BookingsServices from "@/services/booking.service";
import SkeletonCardBooking from "./SkeletonCardBooking";
const SectionBerlangsung = () => {
  const { data: dataAllConfirmBookings, isLoading } = useQuery({
    queryKey: ["bookings-confirmed"],
    queryFn: () => BookingsServices.getAllBookings({ status: "confirmed" }),
  });
  return (
    <div>
      <div
        style={{
          overflowY: "auto",
          maxHeight: "70vh", // Atur sesuai kebutuhan
        }}
        className="flex-grow-1 d-flex flex-column"
      >
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
    </div>
  );
};

export default SectionBerlangsung;
