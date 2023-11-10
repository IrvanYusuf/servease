import React from "react";
import aboutImg from "../../assets/img/about-us.png";
import "../../styles/organisms/sectionAboutUs.css";
const SectionAboutUs = () => {
  return (
    <section>
      <div className="about-us-container">
        <h2 className="text-center">About Us</h2>
        <div className="row align-items-center">
          <div className="col-6">
            <img src={aboutImg} alt="img about" className="about-img" />
          </div>
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quasi perspiciatis, tempore minima unde, nemo at ipsum molestias
              assumenda voluptatem architecto obcaecati deserunt dignissimos
              doloremque quam dicta eos exercitationem tenetur!.Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Ipsam quasi
              perspiciatis, tempore minima unde, nemo at ipsum molestias
              assumenda voluptatem architecto obcaecati deserunt dignissimos
              doloremque quam dicta eos exercitationem tenetur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quasi perspiciatis, tempore minima unde, nemo at ipsum molestias
              assumenda voluptatem architecto obcaecati deserunt dignissimos
              doloremque quam dicta eos exercitationem tenetur!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
