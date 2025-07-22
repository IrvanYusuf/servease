import SectionCategoryService from "@/components/organisms/SectionCategoryService";
import SectionOurPartner from "@/components/organisms/SectionOurPartner";
import SectionCardTutorial from "@/components/organisms/SectionCardTutorial";
import Banner from "@/components/organisms/Banner";
import SectionAboutUs from "@/components/organisms/SectionAboutUs";
import { useQuery } from "@tanstack/react-query";
import CategoriesService from "@/services/category.service";
import BannersService from "@/services/banner.service";
import VideosServices from "@/services/video.service";
const LandingPage = () => {
  // banners
  const { data: bannersData, isLoading: isLoadingBanners } = useQuery({
    queryKey: ["banners"],
    queryFn: BannersService.getAllBanners,
  });

  // categories
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: CategoriesService.getAllCategories,
  });

  // videos
  const { data: videosData, isLoading: isLoadingVideos } = useQuery({
    queryKey: ["videos"],
    queryFn: VideosServices.getAllVideos,
  });
  return (
    <div className="container">
      <Banner dataBanners={bannersData} isLoading={isLoadingBanners} />
      <SectionCategoryService
        dataCategories={categoriesData}
        isLoading={isLoading}
      />
      {/* <SectionCardAtractiveOffering /> */}
      <SectionOurPartner />
      <SectionCardTutorial
        videosData={videosData}
        isLoading={isLoadingVideos}
      />
      <SectionAboutUs />
    </div>
  );
};

export default LandingPage;
