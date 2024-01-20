import React, { useEffect, useState } from "react";
import ActionButton from "../../atoms/ActionButton";
import ActionButtonGray from "../../atoms/ActionButtonGray";
import ModalUploadGaleri from "../../molecules/mitra/ModalUploadGaleri";
import { useAuth } from "../../../context/authContext";
import { apiMitra } from "../../../api/apiMitra";
import { limitAddress } from "../../../utils/text";

const GaleriMedia = () => {
  const [showModalGaleri, setShowModalGaleri] = useState(false);
  const [galeriMediaMitra, setGaleriMediaMitra] = useState([]);
  const [waktuImageDiubah, setWaktuImageDiubah] = useState([]);
  const { idMitra, token } = useAuth();

  const getAllGalleriesMitra = async () => {
    try {
      const response = await fetch(`${apiMitra}/gallery/${idMitra}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      console.log(data.data);
      setGaleriMediaMitra(data.data);
      const formatDates = [];
      for (let index = 0; index < data.data.length; index++) {
        const originalDate = data.data[index].updated_at;
        const dateObject = new Date(originalDate);

        // Format the date as YYYY-MM-DD
        const formattedDate = dateObject.toISOString().split("T")[0];

        // Format the time as HH:MM:SS
        const formattedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;

        // Combine date and time
        const formattedDateWithTime = `${formattedDate} ${formattedTime}`;

        formatDates.push(formattedDateWithTime);
      }
      setWaktuImageDiubah(formatDates);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowModalGaleri = () => {
    setShowModalGaleri(true);
  };

  const bytesToMB = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2);
  };

  useEffect(() => {
    getAllGalleriesMitra();
  }, []);

  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="mt-2">
        <h4>Galeri Media</h4>
        <span>
          Tampilkan infomasi servis anda dengan gambar untuk menarik customer
        </span>
      </div>
      <div className="row mt-4 align-items-center">
        <div className="col-6 d-flex align-items-center column-gap-2">
          <label htmlFor="searchNamaFile">Nama file :</label>
          <div className="w-75">
            <input
              type="search"
              className="form-control w-100"
              id="searchNamaFile"
            />
          </div>
        </div>
        <div className="col-6 d-flex align-items-center column-gap-2">
          <label htmlFor="searchNamaFile">Waktu diubah :</label>
          <div style={{ width: "60%" }}>
            <input
              type="search"
              className="form-control w-100"
              id="searchNamaFile"
            />
          </div>
        </div>
      </div>
      <div className="d-flex mt-4 column-gap-3">
        <div>
          <ActionButton text={"Tampilkan"} />
        </div>
        <div>
          <ActionButtonGray text={"Atur Ulang"} type={"reset"} />
        </div>
      </div>
      <div className="d-flex mt-5 justify-content-between align-items-center">
        <h5>Semua file</h5>
        <div className="d-flex column-gap-2">
          <div>
            <ActionButton
              text={"Upload file"}
              onClick={handleShowModalGaleri}
            />
          </div>
          <div>
            <ActionButtonGray text={"Hapus"} />
          </div>
        </div>
      </div>
      <hr />
      <div className="overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                </div>
              </th>
              <th>Nama file</th>
              <th>Ukuran file</th>
              <th>Waktu diubah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {galeriMediaMitra.map((galeri, i) => (
              <tr className="align-middle">
                <td>
                  <input class="form-check-input" type="checkbox" value="" />
                </td>
                <td>
                  <div className="d-flex align-items-center column-gap-2">
                    <img
                      src={`http://localhost:3000/images/gallery/${galeri.image}`}
                      alt=""
                      width={"85px"}
                      height={"65px"}
                      className="rounded-2"
                    />
                    <span>{limitAddress(galeri.image)}</span>
                  </div>
                </td>
                <td>{bytesToMB(galeri.ukuran)}MB</td>
                <td>{waktuImageDiubah[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalUploadGaleri
        show={showModalGaleri}
        onHide={() => setShowModalGaleri(false)}
        getAllGalleriesMitra={getAllGalleriesMitra}
      />
    </div>
  );
};

export default GaleriMedia;
