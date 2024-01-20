import React from "react";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonGray from "../../atoms/ActionButtonGray";
import "../../../styles/pages/mitraBeranda.css";
import SectionPenilaianSemua from "../../organisms/SectionPenilaianSemua";
import SectionPenilaian5 from "../../organisms/SectionPenilaian5";
import SectionPenilaian4 from "../../organisms/SectionPenilaian4";
import SectionPenilaian3 from "../../organisms/SectionPenilaian3";
import SectionPenilaian2 from "../../organisms/SectionPenilaian2";
import SectionPenilaian1 from "../../organisms/SectionPenilaian1";
const PenilaianPage = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="mt-2">
        <h4>Penilaian</h4>
        <span>Lihat Penilaian toko anda</span>
      </div>
      <div className="d-flex mt-4 align-items-center column-gap-2">
        <label htmlFor="searchPenilaian">Waktu Penilaian :</label>
        <div>
          <input type="search" className="form-control" />
        </div>
        <div className="d-flex">
          <div className="ms-2">
            <ActionButton text={"Tampilkan"} />
          </div>
          <div className="ms-2">
            <ActionButtonGray text={"Atur Ulang"} />
          </div>
        </div>
      </div>
      <ul class="nav border-bottom mt-5" id="myTab" role="tablist">
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link active"
            id="semua-tab"
            data-bs-toggle="tab"
            data-bs-target="#semua-tab-pane"
            type="button"
            role="tab"
            aria-controls="semua-tab-pane"
            aria-selected="true"
          >
            Semua
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="penilaian-bintang-5-tab"
            data-bs-toggle="tab"
            data-bs-target="#penilaian-bintang-5-tab-pane"
            type="button"
            role="tab"
            aria-controls="penilaian-bintang-5-tab-pane"
            aria-selected="false"
          >
            Bintang 5
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="penilaian-bintang-4-tab"
            data-bs-toggle="tab"
            data-bs-target="#penilaian-bintang-4-tab-pane"
            type="button"
            role="tab"
            aria-controls="penilaian-bintang-4-tab-pane"
            aria-selected="false"
          >
            Bintang 4
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="penilaian-bintang-3-tab"
            data-bs-toggle="tab"
            data-bs-target="#penilaian-bintang-3-tab-pane"
            type="button"
            role="tab"
            aria-controls="penilaian-bintang-3-tab-pane"
            aria-selected="false"
          >
            Bintang 3
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="penilaian-bintang-2-tab"
            data-bs-toggle="tab"
            data-bs-target="#penilaian-bintang-2-tab-pane"
            type="button"
            role="tab"
            aria-controls="penilaian-bintang-2-tab-pane"
            aria-selected="false"
          >
            Bintang 2
          </button>
        </li>
        <li class="nav-item nav-active-border-bottom" role="presentation">
          <button
            class="nav-link"
            id="penilaian-bintang-1-tab"
            data-bs-toggle="tab"
            data-bs-target="#penilaian-bintang-1-tab-pane"
            type="button"
            role="tab"
            aria-controls="penilaian-bintang-1-tab-pane"
            aria-selected="false"
          >
            Bintang 1
          </button>
        </li>
      </ul>
      <div class="tab-content h-100 overflow-y-auto mt-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="semua-tab-pane"
          role="tabpanel"
          aria-labelledby="semua-tab"
          tabindex="0"
        >
          <SectionPenilaianSemua />
        </div>
        <div
          class="tab-pane fade"
          id="penilaian-bintang-5-tab-pane"
          role="tabpanel"
          aria-labelledby="penilaian-bintang-5-tab"
          tabindex="0"
        >
          <SectionPenilaian5 />
        </div>
        <div
          class="tab-pane fade"
          id="penilaian-bintang-4-tab-pane"
          role="tabpanel"
          aria-labelledby="penilaian-bintang-4-tab"
          tabindex="0"
        >
          <SectionPenilaian4 />
        </div>
        <div
          class="tab-pane fade"
          id="penilaian-bintang-3-tab-pane"
          role="tabpanel"
          aria-labelledby="penilaian-bintang-3-tab"
          tabindex="0"
        >
          <SectionPenilaian3 />
        </div>
        <div
          class="tab-pane fade"
          id="penilaian-bintang-2-tab-pane"
          role="tabpanel"
          aria-labelledby="penilaian-bintang-2-tab"
          tabindex="0"
        >
          <SectionPenilaian2 />
        </div>
        <div
          class="tab-pane fade"
          id="penilaian-bintang-1-tab-pane"
          role="tabpanel"
          aria-labelledby="penilaian-bintang-1-tab"
          tabindex="0"
        >
          <SectionPenilaian1 />
        </div>
      </div>
    </div>
  );
};

export default PenilaianPage;
