import React from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";

const SectionSelesaiTransaksiMitra = () => {
  const status = ["Baru", "Berlangsung", "Selesai", "Dibatalkan"];
  const datas = [
    {
      id: 1,
      status: "Selesai",
    },
    {
      id: 2,
      status: "Selesai",
    },
    {
      id: 3,
      status: "Selesai",
    },
    {
      id: 4,
      status: "Selesai",
    },
    {
      id: 5,
      status: "Selesai",
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
                  {data.status === "Selesai" ? (
                    <StatusTransaksi
                      textStatus={data.status}
                      backgroundColor={"rgba(80, 141, 105, 0.23)"}
                      color={"#508D69"}
                    />
                  ) : (
                    ""
                  )}
                </td>
                <td className="fw-medium text-secondary">25/12/2023</td>
                <td className="fw-medium text-secondary">
                  Jalan Jangka No.25, Sei Putih Barat Kec, Medan Petisah
                </td>
                <td className="text-secondary">
                  ac berisik keluar suara gitar sama suling prindapan kadang
                  kadang kaya suara rx king ....
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionSelesaiTransaksiMitra;
