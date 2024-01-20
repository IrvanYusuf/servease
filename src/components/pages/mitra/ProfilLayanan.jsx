import React from "react";
import SectionProfilInformasiDasar from "../../organisms/SectionProfilInformasiDasar";
import SectionProfilInformasiBisnis from "../../organisms/SectionProfilInformasiBisnis";

const ProfilLayanan = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="mt-2">
        <h4>Profil Layanan</h4>
        <span>Lihat dan perbarui informasi layanan servis anda</span>
      </div>
      <div>
        <ul class="nav border-bottom mt-5" id="myTab" role="tablist">
          <li class="nav-item nav-active-border-bottom" role="presentation">
            <button
              class="nav-link active"
              id="informasi-dasar-tab"
              data-bs-toggle="tab"
              data-bs-target="#informasi-dasar-tab-pane"
              type="button"
              role="tab"
              aria-controls="informasi-dasar-tab-pane"
              aria-selected="true"
            >
              Informasi Dasar
            </button>
          </li>
          <li class="nav-item nav-active-border-bottom" role="presentation">
            <button
              class="nav-link"
              id="informasi-bisnis-tab"
              data-bs-toggle="tab"
              data-bs-target="#informasi-bisnis-tab-pane"
              type="button"
              role="tab"
              aria-controls="informasi-bisnis-tab-pane"
              aria-selected="false"
            >
              Informasi Bisnis
            </button>
          </li>
        </ul>
        <div class="tab-content mt-4" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="informasi-dasar-tab-pane"
            role="tabpanel"
            aria-labelledby="informasi-dasar-tab"
            tabindex="0"
          >
            <SectionProfilInformasiDasar />
          </div>
          <div
            class="tab-pane fade"
            id="informasi-bisnis-tab-pane"
            role="tabpanel"
            aria-labelledby="informasi-bisnis-tab"
            tabindex="0"
          >
            <SectionProfilInformasiBisnis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilLayanan;
