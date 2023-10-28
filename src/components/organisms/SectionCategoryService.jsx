import React from "react";
import CardCategory from "../molecules/CardCategory";
import "../../styles/organisms/sectionCategoryService.css";

const SectionCategoryService = ({ dataCategories }) => {
  return (
    <section className="category-container">
      <h2>Daftar Layanan Service</h2>
      <div className="row container-fluid">
        {dataCategories.map((category) => (
          <CardCategory
            key={category.id}
            path={`/detail/1`}
            image={category.image}
            text={category.category}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionCategoryService;
