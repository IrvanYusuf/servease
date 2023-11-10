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
              Kami memiliki visi untuk membuat pencarian dan pemesanan layanan
              servis menjadi lebih mudah dan efisien bagi semua orang. ServEase
              adalah sebuah platform inovatif yang dirancang khusus untuk
              memenuhi kebutuhan Anda dalam mencari penyedia jasa servis yang
              andal dan terpercaya.
            </p>
            <p>
              Dengan ServEase, Anda tidak perlu lagi bersusah payah mencari
              tukang servis yang berkualitas. Kami menghadirkan berbagai
              kategori layanan servis yang meliputi perbaikan elektronik,
              perawatan AC, hingga renovasi rumah. Apapun yang Anda butuhkan,
              ServEase hadir untuk menghubungkan Anda dengan penyedia layanan
              terbaik di bidangnya. Kami berkomitmen untuk memberikan pengalaman
              terbaik bagi pengguna kami, baik itu pencari layanan maupun
              penyedia layanan servis. ServEase hadir untuk memudahkan hidup
              Anda dan membantu Anda menemukan solusi untuk semua kebutuhan
              servis Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
