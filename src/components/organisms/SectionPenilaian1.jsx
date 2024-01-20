import React from "react";
import "../../styles/organisms/sectionPenilaianSemua.css";
import { FaStar } from "react-icons/fa6";

const SectionPenilaian1 = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tanggal</th>
            <th scope="col">Kode Pemesanan</th>
            <th scope="col">Rating</th>
            <th scope="col">Ulasan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (v, i) => (
            <tr>
              <th scope="row" className="fw-medium text-secondary">
                25 Desember 2023
              </th>
              <td className="fw-medium text-secondary">AJH98YG</td>
              <td>
                {Array.from({ length: 5 }, (v, i) => (
                  <FaStar className="text-warning" />
                ))}
              </td>
              <td className="text-truncate" style={{ maxWidth: "200px" }}>
                Bagus dan cepat, kerjanya bener tapi ngerokoknya banyak
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionPenilaian1;
