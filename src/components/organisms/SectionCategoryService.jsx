import React from "react";
import CardCategory from "@/components/molecules/CardCategory";
import "@/styles/organisms/sectionCategoryService.css";
import { Col, Placeholder, Row } from "react-bootstrap";

const SectionCategoryService = ({ dataCategories, isLoading }) => {
  console.log(dataCategories);

  return (
    <section className="category-container">
      <h2>Daftar Layanan Service</h2>
      <Row>
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="col-lg-2 col-6 col-md-4" key={index}>
                <Placeholder as="div" animation="glow">
                  <Placeholder
                    style={{ height: "100px", width: "100%" }}
                    className="rounded"
                  />
                </Placeholder>
              </div>
            ))}
          </>
        ) : (
          dataCategories?.data &&
          dataCategories.data.map((category) => (
            <Col key={category._id} xs={6} md={4} lg={2} className="h-100">
              <CardCategory
                path={`/services/${category._id}`}
                image={category.url_icon}
                text={category.name}
              />
            </Col>
          ))
        )}
      </Row>
    </section>
  );
};

export default SectionCategoryService;
