import CardUlasan from "@/components/molecules/CardUlasan";
import "@/styles/organisms/cardUlasan.css";
import { useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";

const SectionCardUlasan = ({ idService }) => {
  const { data: dataServiceReviews, isLoading } = useQuery({
    queryKey: ["service-reviews", idService],
    queryFn: () => ServicesServices.getServiceReviews(idService),
  });
  return (
    <div className="ulasan-container">
      <h2>Ulasan</h2>
      <div className="card-ulasan-container">
        {isLoading ? (
          "loading...."
        ) : dataServiceReviews?.data && dataServiceReviews?.data ? (
          <CardUlasan
            key={dataServiceReviews.data._id}
            reviewText={dataServiceReviews?.data?.comment ?? ""}
            reviewImgUser={
              dataServiceReviews?.data?.user_id.profile_url || null
            }
            nama={dataServiceReviews?.data?.user_id.name || ""}
            star={dataServiceReviews?.data?.rating || 0}
          />
        ) : (
          <h6>Belum Ada Review</h6>
        )}
      </div>
    </div>
  );
};

export default SectionCardUlasan;
