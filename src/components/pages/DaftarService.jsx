// import { useEffect, useState } from "react";
import ServiceCard from "../molecules/ServiceCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const DaftarService = () => {
  const [services, setServices] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const idCategory = searchParam.get("category_id");
  console.log(idCategory);
  const getServicesById = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/services?category_id=${idCategory}`,
        {
          method: "GET",
        }
      );
      const dataServices = await response.json();
      setServices(dataServices);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getServicesById();
  }, [searchParam]);
  console.log(services);
  return <ServiceCard dataServices={services} />;
};

export default DaftarService;
