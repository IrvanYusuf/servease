import React, { useEffect, useState } from "react";
import StatusTransaksi from "../../atoms/StatusTransaksi";
import { apiTransaction } from "../../../api/apiTransaction";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const SectionBaruTransaksiMitra = () => {
  const { token, idMitra } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const [allTransaction, setAllTransaction] = useState([]);
  const [waktuImageDiubah, setWaktuImageDiubah] = useState([]);

  const getAllTransactionMitra = async () => {
    try {
      const response = await fetch(
        `${apiTransaction}/mitra/all/${idMitra}/Baru`,
        {
          method: "GET",
          headers: {
            authorization: token,
          },
        }
      );
      const { data } = await response.json();
      console.log(data.length);
      const formatDates = [];
      for (let index = 0; index < data.length; index++) {
        const originalDate = data[index].tanggal_layanan;
        const dateObject = new Date(originalDate);

        // Format the date as YYYY-MM-DD
        const formattedDate = dateObject.toISOString().split("T")[0];
        // Combine date and time
        const formattedDateWithTime = `${formattedDate}`;

        formatDates.push(formattedDateWithTime);
      }
      setWaktuImageDiubah(formatDates);
      setAllTransaction(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(waktuImageDiubah);

  useEffect(() => {
    getAllTransactionMitra();
  }, []);
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
            {allTransaction.map((data, i) => (
              <tr>
                <td>
                  <Link
                    to={`/mitra/transaksi-detail/${data.id_transaksi}`}
                    className="text-decoration-none"
                  >
                    {data.status === "Baru" ? (
                      <StatusTransaksi
                        textStatus={data.status}
                        backgroundColor={"rgba(239,61,1,0.2)"}
                        color={"#EF3D01"}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                </td>
                <td className="fw-medium text-secondary" width={"130px"}>
                  <Link
                    to={`/mitra/transaksi-detail/${data.id_transaksi}`}
                    className="text-decoration-none text-secondary"
                  >
                    {waktuImageDiubah[i]}
                  </Link>
                </td>
                <td className="fw-medium text-secondary">
                  <Link
                    to={`/mitra/transaksi-detail/${data.id_transaksi}`}
                    className="text-decoration-none text-secondary"
                  >
                    {data.nama_jalan}, {data.kabupaten}, {data.kecamatan}
                  </Link>
                </td>
                <td className="text-secondary">
                  <Link
                    to={`/mitra/transaksi-detail/${data.id_transaksi}`}
                    className="text-decoration-none text-secondary"
                  >
                    {data.deskripsi}
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

export default SectionBaruTransaksiMitra;
