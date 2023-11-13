import React, { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import "../../styles/pages/riwayatPemesanan.css";
import SectionLihatSemua from "../organisms/SectionLihatSemua";
import SectionBerlangsung from "../organisms/SectionBerlangsung";
import SectionSelesai from "../organisms/SectionSelesai";
import SectionDibatalkan from "../organisms/SectionDibatalkan";
import "bootstrap/js/dist/tab.js";
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
      dataBsTarget: "#riwayat-berlangsung",
      ariaControl: "riwayat-berlangsung",
      text: "Berlangsung",
    },
    {
      id: 3,
      dataBsTarget: "#riwayat-selesai",
      ariaControl: "riwayat-selesai",
      text: "Selesai",
    },
    {
      id: 4,
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
      targetId: "riwayat-berlangsung",
      component: <SectionBerlangsung />,
    },
    {
      id: 3,
      targetId: "riwayat-selesai",
      component: <SectionSelesai />,
    },
    {
      id: 4,
      targetId: "riwayat-dibatalkan",
      component: <SectionDibatalkan />,
    },
  ];
  const [activeTab, setActiveTab] = useState(datatabContent[0].targetId);
  return (
    // <div className="w-100 h-100">
    //   <div className="py-3">
    //     <h4>Riwayat Pemesanan</h4>
    //   </div>
    //   <div className="w-100 mx-auto container-btn-filter-riwayat">
    //     <ul
    //       class="nav nav-pills mb-3 d-flex column-gap-3"
    //       id="pills-tab"
    //       role="tablist"
    //     >
    //       {dataButtonRiwayat.map((data) => (
    //         <li class="nav-item" role="presentation" key={data.id}>
    //           <button
    //             class={`nav-link  ${
    //               data.dataBsTarget === "#riwayat-semua" ? "active" : ""
    //             }`}
    //             // id="pills-home-tab"
    //             data-bs-toggle="pill"
    //             data-bs-target={data.dataBsTarget}
    //             type="button"
    //             role="tab"
    //             aria-controls={data.ariaControl}
    //             aria-selected="true"
    //             onClick={() => {
    //               setActive("active");
    //             }}
    //           >
    //             {data.text}
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //     <div class="tab-content px-0" id="pills-tabContent">
    //       {datatabContent.map((dataContent) => (
    //         <div
    //           key={dataContent.id}
    //           class={`tab-pane fade border h-100 ${
    //             dataContent.targetId === activeTab ? "show active" : ""
    //           }`}
    //           id={dataContent.targetId}
    //           role="tabpanel"
    //           // aria-labelledby="pills-home-tab"
    //           tabindex="0"
    //         >
    //           {dataContent.component}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex justify-content-between py-3">
        <h4>Riwayat Pemesanan</h4>
      </div>
      <div className="container-btn-filter-riwayat d-flex flex-column justify-content-center h-100">
        <ul
          class="nav nav-pills mb-3 d-flex column-gap-3"
          id="pills-tab"
          role="tablist"
        >
          {dataButtonRiwayat.map((data) => (
            <li class="nav-item" role="presentation" key={data.id}>
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
        <div class="tab-content px-0 h-100" id="pills-tabContent">
          {datatabContent.map((dataContent) => (
            <div
              key={dataContent.id}
              class={`tab-pane fade h-100 ${
                dataContent.targetId === activeTab ? "show active" : ""
              }`}
              id={dataContent.targetId}
              role="tabpanel"
              // aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              {dataContent.component}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="d-flex flex-column justify-content-center align-items-center h-100 border border-success">
        kkk
      </div> */}
    </div>
  );
};

export default RiwayatPemesanan;
