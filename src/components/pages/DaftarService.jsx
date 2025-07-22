import ServiceCard from "@/components/molecules/ServiceCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";
const DaftarService = () => {
  const { idCategory } = useParams();

  const { data: services, isLoading } = useQuery({
    queryKey: ["services", idCategory],
    queryFn: () => ServicesServices.getAllServicesByCategory(idCategory),
  });

  return <ServiceCard dataServices={services} isLoading={isLoading} />;
};

export default DaftarService;
