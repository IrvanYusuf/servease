import React from "react";
import CardCategory from "../molecules/CardCategory";
import "../../styles/organisms/sectionCategoryService.css";

const SectionCategoryService = ({ dataCategories }) => {
  console.log(dataCategories);
  return (
    <section className="category-container">
      <h2>Daftar Layanan Service</h2>
      <div className="row container-fluid">
        {dataCategories.map((category) => (
          <CardCategory
            key={category.id}
            path={`/daftar-service/${category.id_kategori}`}
            image={category.image}
            text={category.nama_kategori}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCategoryService;
