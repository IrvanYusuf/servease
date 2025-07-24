import { useState } from "react";
import "@/styles/pages/riwayatPemesanan.css";
import "bootstrap/js/dist/tab.js";
import SectionMenungguDiulas from "@/components/organisms/SectionMenungguDiulas";
import SectionUlasanSaya from "@/components/organisms/SectionUlasanSaya";
const Ulasan = () => {
  const [active, setActive] = useState("");

  const dataButtonRiwayat = [
    {
      id: 1,
      dataBsTarget: "#menunggu-diulas",
      ariaControl: "menunggu-diulas",
      text: "Menunggu Diulas",
    },
    {
      id: 2,
      dataBsTarget: "#ulasan-saya",
      ariaControl: "ulasan-saya",
      text: "Ulasan Saya",
    },
  ];

  const datatabContent = [
    {
      id: 1,
      targetId: "menunggu-diulas",
      component: <SectionMenungguDiulas />,
    },
    {
      id: 2,
      targetId: "ulasan-saya",
      component: <SectionUlasanSaya />,
    },
  ];
  const [activeTab, setActiveTab] = useState(datatabContent[0].targetId);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4>Ulasan</h4>
      </div>
      {/* <div className="h-100 d-flex flex-column"> */}
      <ul
        class="nav nav-pills mb-3 d-flex column-gap-3"
        id="pills-tab"
        role="tablist"
      >
        {dataButtonRiwayat.map((data) => (
          <li
            class="container-btn-filter-riwayat nav-item"
            role="presentation"
            key={data.id}
          >
            <button
              class={`nav-link  ${
                data.dataBsTarget === "#menunggu-diulas" ? "active" : ""
              }`}
              // id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target={data.dataBsTarget}
              type="button"
              role="tab"
              aria-controls={data.ariaControl}
              aria-selected="true"
              onClick={() => {
                setActive("active");
              }}
            >
              {data.text}
            </button>
          </li>
        ))}
      </ul>
      <div className="h-100 overflow-y-auto">
        <div class="tab-content px-0" id="pills-tabContent">
          {datatabContent.map((dataContent) => (
            <div
              key={dataContent.id}
              class={`tab-pane fade h-100 ${
                dataContent.targetId === activeTab ? "show active" : ""
              }`}
              id={dataContent.targetId}
              role="tabpanel"
              // aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              {dataContent.component}
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Ulasan;
