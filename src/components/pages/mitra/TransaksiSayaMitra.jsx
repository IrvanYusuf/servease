import React, { useState } from "react";
import SectionSemuaTransaksiMitra from "../../organisms/mitra/SectionSemuaTransaksiMitra";
import "../../../styles/pages/mitraBeranda.css";
import SectionBaruTransaksiMitra from "../../organisms/mitra/SectionBaruTransaksiMitra";
import SectionSelesaiTransaksiMitra from "../../organisms/mitra/SectionSelesaiTransaksiMitra";
import SectionDibatalkanTransaksiMitra from "../../organisms/mitra/SectionDibatalkanTransaksiMitra";

const TransaksiSayaMitra = () => {
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
      text: "Baru",
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
      component: <SectionSemuaTransaksiMitra />,
    },
    {
      id: 2,
      targetId: "riwayat-berlangsung",
      component: <SectionBaruTransaksiMitra />,
    },
    {
      id: 3,
      targetId: "riwayat-selesai",
      component: <SectionSelesaiTransaksiMitra />,
    },
    {
      id: 4,
      targetId: "riwayat-dibatalkan",
      component: <SectionDibatalkanTransaksiMitra />,
    },
  ];
  const [activeTab, setActiveTab] = useState(datatabContent[0].targetId);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div>
        <h4>Transaksi Saya</h4>
        <p>LIhat Semua Riwayat Transaksi Kamu</p>
      </div>
      <hr />
      <ul class="nav border-bottom mt-1" id="pills-tab" role="tablist">
        {dataButtonRiwayat.map((data) => (
          <li
            class="nav-item nav-active-border-bottom"
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
      <div className="h-100 overflow-y-auto mt-3">
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

export default TransaksiSayaMitra;
