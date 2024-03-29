import React, { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import "../../styles/pages/riwayatPemesanan.css";
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
                data.dataBsTarget === "#riwayat-semua" ? "active" : ""
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

export default RiwayatPemesanan;
