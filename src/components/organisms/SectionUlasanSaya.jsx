import CardUlasanSaya from "@/components/molecules/CardUlasanSaya";
import NotFoundSection from "./NotFoundSection";
import { useQuery } from "@tanstack/react-query";
import ReviewsServices from "@/services/review.service";
import { formatDate } from "@/utils/formattedDate";

const SectionUlasanSaya = () => {
  const { data: dataReviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: ReviewsServices.getAllReviews,
  });
  return (
    <>
      {/* <pre>{JSON.stringify(dataReviews, null, 2)}</pre> */}
      <div className="d-flex flex-column align-items-center">
        {dataReviews?.data?.length > 0 ? (
          dataReviews?.data?.map((review, i) => (
            <CardUlasanSaya
              key={review._id}
              deskripsi={review.comment}
              image={review.service_id.thumbnail}
              kategori={review.service_id.category_id.name}
              kodePemesanan={review._id}
              namaServis={review.service_id.name}
              tanggal={formatDate({ date: review.createdAt })}
              rate={review.rating}
            />
          ))
        ) : (
          <div className="mt-5">
            <NotFoundSection />
          </div>
        )}
      </div>
    </>
  );
};

export default SectionUlasanSaya;
