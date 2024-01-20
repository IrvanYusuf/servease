import React from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";
import { Link } from "react-router-dom";

const SectionSemuaTransaksiMitra = () => {
  const datas = [
    {
      id: 1,
      status: "Baru",
    },
    {
      id: 2,
      status: "Berlangsung",
    },
    {
      id: 3,
      status: "Selesai",
    },
    {
      id: 4,
      status: "Dibatalkan",
    },
    {
      id: 5,
      status: "Baru",
    },
  ];
  return (
    <div className="d-flex flex-column h-100">
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Tanggal</th>
              <th>Alamat</th>
              <th>Masalah</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => (
              <tr>
                <td>
                  <Link
                    to={"/mitra/transaksi-detail/1"}
                    className="text-decoration-none"
                  >
                    {data.status === "Berlangsung" ? (
                      <StatusTransaksi
                        textStatus={data.status}
                        backgroundColor={"rgba(79, 80, 233, 0.23)"}
                        color={"#4f50e9"}
                      />
                    ) : data.status === "Baru" ? (
                      <StatusTransaksi
                        textStatus={data.status}
                        backgroundColor={"rgba(239,61,1,0.2)"}
                        color={"#EF3D01"}
                      />
                    ) : data.status === "Selesai" ? (
                      <StatusTransaksi
                        textStatus={data.status}
                        backgroundColor={"rgba(80, 141, 105, 0.23)"}
                        color={"#508D69"}
                      />
                    ) : data.status === "Dibatalkan" ? (
                      <StatusTransaksi
                        textStatus={data.status}
                        backgroundColor={"rgba(179,19,18,0.23"}
                        color={"#B31312"}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                </td>
                <td className="fw-medium text-secondary">
                  <Link
                    to={"/mitra/transaksi-detail/1"}
                    className="text-decoration-none text-secondary"
                  >
                    25/12/2023
                  </Link>
                </td>
                <td className="fw-medium text-secondary">
                  <Link
                    to={"/mitra/transaksi-detail/1"}
                    className="text-decoration-none text-secondary"
                  >
                    Jalan Jangka No.25, Sei Putih Barat Kec, Medan Petisah
                  </Link>
                </td>
                <td className="text-secondary">
                  <Link
                    to={"/mitra/transaksi-detail/1"}
                    className="text-decoration-none text-secondary"
                  >
                    ac berisik keluar suara gitar sama suling prindapan kadang
                    kadang kaya suara rx king ....
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionSemuaTransaksiMitra;
