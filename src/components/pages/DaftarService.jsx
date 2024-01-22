// import { useEffect, useState } from "react";
import ServiceCard from "../molecules/ServiceCard";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { apiMitra } from "../../api/apiMitra";
const DaftarService = () => {
  const [services, setServices] = useState([]);
  const { idCategory } = useParams();

  const getServicesById = async () => {
    try {
      const response = await fetch(`${apiMitra}/list/${idCategory}`, {
        method: "GET",
      });
      const dataServices = await response.json();
      console.log(dataServices.data);
      setServices(dataServices.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getServicesById();
  }, [idCategory]);
  return <ServiceCard dataServices={services} />;
};

export default DaftarService;
