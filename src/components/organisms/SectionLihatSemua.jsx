import CardHistoryBooking from "@/components/molecules/CardHistoryBooking";
import NotFoundSection from "./NotFoundSection";
import { useQuery } from "@tanstack/react-query";
import BookingsServices from "@/services/booking.service";
import SkeletonCardBooking from "./SkeletonCardBooking";
import CustomPagination from "./CustomPagination";
import { useSearchParams } from "react-router-dom";

const SectionLihatSemua = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const { data: dataAllBookings, isLoading } = useQuery({
    queryKey: ["bookings", currentPage],
    queryFn: () => BookingsServices.getAllBookings({ page: currentPage }),
  });

  const totalPagesPagination =
    dataAllBookings?.data?.pagination?.totalPages || 1;

  const handlePageChange = (page) => {
    setSearchParams({ page: page.toString() });
  };

  console.log(dataAllBookings);

  return (
    <div>
      <div
        style={{
          overflowY: "auto",
          maxHeight: "70vh", // Atur sesuai kebutuhan
        }}
        className="flex-grow-1 d-flex flex-column"
      >
        <div className="d-flex flex-column align-items-center row-gap-3 px-2 pb-3">
          {isLoading ? (
            <>
              <SkeletonCardBooking length={3} />
            </>
          ) : dataAllBookings?.data?.data.length === 0 ? (
            <div className="mt-5">
              <NotFoundSection />
            </div>
          ) : (
            dataAllBookings?.data.data &&
            dataAllBookings?.data?.data.map((transaction) => (
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
      <div className="py-3 d-flex justify-content-end">
        <CustomPagination
          totalPages={totalPagesPagination}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SectionLihatSemua;
