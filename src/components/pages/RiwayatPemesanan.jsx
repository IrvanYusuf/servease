import { useState } from "react";
import "@/styles/pages/riwayatPemesanan.css";
import SectionLihatSemua from "../organisms/SectionLihatSemua";
import SectionBerlangsung from "../organisms/SectionBerlangsung";
import SectionSelesai from "../organisms/SectionSelesai";
import SectionDibatalkan from "../organisms/SectionDibatalkan";
import "bootstrap/js/dist/tab.js";
import SectionBaru from "../organisms/SectionBaru";
const RiwayatPemesanan = () => {
  const [active, setActive] = useState("");

  const dataButtonRiwayat = [
    {
      id: 1,
      dataBsTarget: "#riwayat-semua",
      ariaControl: "riwayat-semua",
      text: "Semua",
    },
    {
      id: 2,
      dataBsTarget: "#riwayat-baru",
      ariaControl: "riwayat-baru",
      text: "Baru",
    },
    {
      id: 3,
      dataBsTarget: "#riwayat-berlangsung",
      ariaControl: "riwayat-berlangsung",
      text: "Berlangsung",
    },
    {
      id: 4,
      dataBsTarget: "#riwayat-selesai",
      ariaControl: "riwayat-selesai",
      text: "Selesai",
    },
    {
      id: 5,
      dataBsTarget: "#riwayat-dibatalkan",
      ariaControl: "riwayat-dibatalkan",
      text: "Dibatalkan",
    },
  ];

  const datatabContent = [
    {
      id: 1,
      targetId: "riwayat-semua",
      component: <SectionLihatSemua />,
    },
    {
      id: 2,
      targetId: "riwayat-baru",
      component: <SectionBaru />,
    },
    {
      id: 3,
      targetId: "riwayat-berlangsung",
      component: <SectionBerlangsung />,
    },
    {
      id: 4,
      targetId: "riwayat-selesai",
      component: <SectionSelesai />,
    },
    {
      id: 5,
      targetId: "riwayat-dibatalkan",
      component: <SectionDibatalkan />,
    },
  ];
  const [activeTab, setActiveTab] = useState(datatabContent[0].targetId);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4>Riwayat Pemesanan</h4>
      </div>
      <ul
        className="nav nav-pills mb-3 d-flex w-100 container-tab column-gap-3 flex-nowrap"
        id="pills-tab"
        role="tablist"
      >
        {dataButtonRiwayat.map((data) => (
          <li
            className="container-btn-filter-riwayat nav-item flex-shrink-0"
            role="presentation"
            key={data.id}
          >
            <button
              className={`nav-link text-center w-100  ${
                data.dataBsTarget === "#riwayat-semua" ? "active" : ""
              }`}
              style={{ minWidth: "120px", whiteSpace: "nowrap" }}
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
        <div className="tab-content px-0" id="pills-tabContent">
          {datatabContent.map((dataContent) => (
            <div
              key={dataContent.id}
              className={`tab-pane fade h-100 ${
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

export default RiwayatPemesanan;
