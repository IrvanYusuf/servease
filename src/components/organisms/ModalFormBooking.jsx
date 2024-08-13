import { Modal } from "react-bootstrap";
import ActionButtonOutline from "../atoms/ActionButtonOutline";
import ActionButton from "../atoms/ActionButton";
import { useEffect, useState } from "react";
import ModalFormBookingStepOne from "../molecules/ModalFormBookingStepOne";
import ModalFormBookingStepTwo from "../molecules/ModalFormBookingStepTwo";
import LabelInput from "../atoms/LabelInput";
import { apiAddress } from "../../api/apiAddress";
import { useAuth } from "../../context/authContext";
import { apiTransaction } from "../../api/apiTransaction";
import { jwtDecode } from "jwt-decode";
import { swal } from "../../utils/sweetAlert";
import { Link, useNavigate } from "react-router-dom";
import iconRiwayatPemesananNotFound from "../../assets/icon/riwayat-pemesanan-notfound.png";

const ModalFormBooking = (props) => {
  const idAlamat = localStorage.getItem("alamat");
  const { idMitra, idCategory } = props;
  const [selectedProperti, setSelectedProperti] = useState(null);
  const [selectedTangga, setSelectedTangga] = useState(null);
  const [keluhan, setKeluhan] = useState([]);
  const [nama, setNama] = useState(null);
  const [noTelp, setNoTelp] = useState(null);
  const [tanggal, setTanggal] = useState(null);
  const [waktu, setWaktu] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [deskripsiMasalah, setDeskripsiMasalah] = useState(null);
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let errors = {};

    if (keluhan.length === 0) {
      errors.keluhan = "Keluhan Minimal Satu";
    }

    if (!nama) {
      errors.nama = "Nama tidak boleh kosong";
    }

    if (!noTelp) {
      errors.no_telp = "Nomor Telepon tidak boleh kosong";
    } else if (!/^\d+$/.test(noTelp)) {
      errors.no_telp = "Nomor Telepon harus berupa angka";
    }

    if (!tanggal) {
      errors.tanggal = "Tanggal tidak boleh kosong";
    }

    if (!waktu) {
      errors.waktu = "Waktu tidak boleh kosong";
    }

    if (!selectedProperti) {
      errors.jenis_properti = "Jenis properti harus dipilih";
    }

    if (!selectedTangga) {
      errors.tangga = "Pilih apakah teknisi perlu membawa tangga";
    }

    if (!deskripsiMasalah) {
      errors.deskripsiMasalah = "Deskripsi Masalah tidak boleh kosong";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    // Buat salinan array keluhan saat ini
    // const updatedKeluhan = [...formBooking.keluhan];
    const updatedKeluhan = [...keluhan];

    if (checked) {
      // Tambahkan nilai ke dalam array jika dicentang
      updatedKeluhan.push(value);
    } else {
      // Hapus nilai dari array jika tidak dicentang
      const index = updatedKeluhan.indexOf(value);
      if (index !== -1) {
        updatedKeluhan.splice(index, 1);
      }
    }

    // Perbarui state formBooking dengan array keluhan yang baru
    // handleFormBooking({ target: { name: "keluhan", value: updatedKeluhan } });
    setKeluhan(updatedKeluhan);
  };

  const handleRadioChangeProperti = (e) => {
    const { value } = e.target;
    setSelectedProperti(value);
    // handleFormBooking({ target: { name: "jenis_properti", value } });
  };

  const handleRadioChangeTangga = (e) => {
    const { value } = e.target;
    setSelectedTangga(value);
    // handleFormBooking({ target: { name: "tangga", value } });
  };

  const getAddressUser = async () => {
    try {
      const response = await fetch(`${apiAddress}/detail/${idAlamat}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const { data } = await response.json();
      const [result] = data;
      setAlamat(result);
    } catch (error) {
      console.log(error);
    }
  };

  const newObjData = {
    id_mitra: idMitra,
    id_alamat: parseInt(idAlamat),
    id_kategori: idCategory,
    keluhan: keluhan,
    jenis_properti: selectedProperti,
    tangga: selectedTangga,
    nama: nama,
    no_telp: noTelp,
    tanggal_layanan: tanggal,
    waktu_layanan: waktu,
    deskripsi: deskripsiMasalah,
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return;
    }
    console.log("halo");

    try {
      if (token) {
        const response = await fetch(`${apiTransaction}/${decoded.id}`, {
          method: "POST",
          headers: {
            authorization: token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(newObjData),
        });
        const { data } = await response.json();
        if (data.affectedRows > 0) {
          swal({
            title: "Success",
            text: "Berhasil Booking",
            icon: "success",
            iconColor: "#EF3D01",
            confirmButtonText: "Tutup",
            //   timer: 1000,
          });
        } else if (data.affectedRows == 0) {
          swal({
            title: "gagal",
            text: "Data gagal",
            icon: "success",
            iconColor: "#EF3D01",
            confirmButtonText: "Tutup",
            //   timer: 1000,
          });
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idAlamat) {
      getAddressUser();
    }
  }, [idAlamat]);

  console.log(errors);
  console.log(keluhan.length);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form action="" noValidate>
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Keluhan/Masalah"} />
              <span className="text-danger"> *</span>
              {idCategory == 1 ? (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Ac rusak"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Ac rusak")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Ac Rusak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pembersihan Ac"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pembersihan Ac")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Pembersihan Ac
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Perawatan"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Perawatan")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Perawatan
                    </label>
                  </div>
                </div>
              ) : idCategory == 2 ? (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Pc rusak"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pc rusak")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Pc Rusak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pembersihan Pc"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pembersihan Pc")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Pembersihan Pc
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Perawatan"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Perawatan")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Perawatan
                    </label>
                  </div>
                </div>
              ) : idCategory == 3 ? (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Lampu rusak"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Lampu rusak")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Lampu Rusak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Lampu Mati"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Lampu Mati")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Lampu Mati
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Perawatan Lampu"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Perawatan Lampu")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Perawatan Lampu
                    </label>
                  </div>
                </div>
              ) : idCategory == 4 ? (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Mesin Cuci rusak"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Mesin Cuci rusak")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Mesin Cuci Rusak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pembersihan Mesin Cuci"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pembersihan Mesin Cuci")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Pembersihan Mesin Cuci
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Perawatan Mesin Cuci"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Perawatan Mesin Cuci")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Perawatan Mesin Cuci
                    </label>
                  </div>
                </div>
              ) : idCategory == 5 ? (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Tv rusak"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Tv rusak")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Tv Rusak
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Layar Tv Mati"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Layar Tv Mati")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Layar Tv Mati
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Perawatan Tv"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Perawatan Tv")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Perawatan Tv
                    </label>
                  </div>
                </div>
              ) : (
                <div className="d-grid row-gap-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Desain Interior"}
                      id="flexCheckDefault"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Desain Interior")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Desain Interior
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pengecatan Rumah"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pengecatan Rumah")}
                      id="flexCheck2"
                    />
                    <label className="form-check-label" htmlFor="flexCheck2">
                      Pengecatan Rumah
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Pembangunan Ruangan"
                      onChange={handleCheckboxChange}
                      checked={keluhan.includes("Pembangunan Ruangan")}
                      id="flexCheck3"
                    />
                    <label className="form-check-label" htmlFor="flexCheck3">
                      Pembangunan Ruangan
                    </label>
                  </div>
                </div>
              )}
            </div>
            {errors.keluhan && (
              <div className="text-danger">{errors.keluhan}</div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Jenis Properti Anda"} />
              <span className="text-danger"> *</span>
              <div className="d-grid row-gap-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jenis_properti"
                    value={"rumah"}
                    checked={selectedProperti === "rumah"}
                    onChange={handleRadioChangeProperti}
                    id="rumah"
                  />
                  <label className="form-check-label" htmlFor="rumah">
                    Rumah
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={"apartemen"}
                    checked={selectedProperti === "apartemen"}
                    name="jenis_properti"
                    onChange={handleRadioChangeProperti}
                    id="apartemen"
                  />
                  <label className="form-check-label" htmlFor="apartemen">
                    Apartemen
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jenis_properti"
                    value={"lainnya"}
                    checked={selectedProperti === "lainnya"}
                    onChange={handleRadioChangeProperti}
                    id="lainnya"
                  />
                  <label className="form-check-label" htmlFor="lainnya">
                    Lainnya
                  </label>
                </div>
              </div>
            </div>
            {errors.jenis_properti && (
              <div className="text-danger">{errors.jenis_properti}</div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Apakah Teknisi perlu membawa tangga"} />
              <span className="text-danger"> *</span>
              <div className="d-grid row-gap-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tangga"
                    value={"ya"}
                    onChange={handleRadioChangeTangga}
                    checked={selectedTangga === "ya"}
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Ya
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tangga"
                    value={"tidak"}
                    onChange={handleRadioChangeTangga}
                    checked={selectedTangga === "tidak"}
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            {errors.selectedTangga && (
              <div className="text-danger">{errors.selectedTangga}</div>
            )}
          </div>
          <hr />
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Nama"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nama...."
                name="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                // required
              />
            </div>
            {errors.nama && <div className="text-danger">{errors.nama}</div>}
            <div className="col">
              <LabelInput labelText={"No Telepon"} />
              <span className="text-danger"> *</span>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nomor Telepon...."
                name="no_telp"
                value={noTelp}
                onChange={(e) => setNoTelp(e.target.value)}
                required
              />
            </div>
            {errors.noTelp && (
              <div className="text-danger">{errors.noTelp}</div>
            )}
          </div>
          <div className="row mb-3">
            <div className="col">
              <LabelInput labelText={"Tanggal"} />
              <span className="text-danger"> *</span>
              <input
                type="date"
                className="form-control"
                name="tanggal"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>
            {errors.tanggal && (
              <div className="text-danger">{errors.tanggal}</div>
            )}
            <div className="col">
              <LabelInput labelText={"Waktu"} />
              <span className="text-danger"> *</span>
              <input
                type="time"
                className="form-control"
                name="waktu"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
                required
              />
            </div>
          </div>
          {errors.waktu && <div className="text-danger">{errors.waktu}</div>}
          <div>
            <LabelInput labelText={"Alamat"} />
            <span className="text-danger"> *</span>
          </div>
          {alamat ? (
            <div>
              <div className="ps-0 mb-3">
                <div className="d-flex justify-content-between">
                  <Link
                    className="border-0 bg-transparent fw-semibold text-decoration-none"
                    style={{ color: "#EF3D01" }}
                    to={"/profile/daftar-alamat"}
                  >
                    Edit
                  </Link>
                </div>
                <div className="h-100">
                  <div
                    className="shadow p-3 rounded-3 mb-4"
                    style={{
                      border: `1px solid #EF3D01`,
                    }}
                  >
                    <b className="text-secondary">{alamat.label_alamat}</b>
                    <h6 className="fw-normal">{alamat.no_telp}</h6>
                    <div className="d-flex">
                      <h6 className="fw-normal">{alamat.nama_jalan},</h6>
                      <h6 className="fw-normal">{alamat.deskripsi}</h6>
                    </div>
                    <div className="d-flex">
                      <h6 className="fw-normal">{alamat.kabupaten},</h6>
                      <h6 className="fw-normal"> {alamat.kecamatan},</h6>
                      <h6 className="fw-normal"> {alamat.provinsi}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
              <img
                src={iconRiwayatPemesananNotFound}
                alt=""
                width={"100px"}
                height={"100px"}
              />
              <div>
                <span>Kamu belum memilih alamat</span>
              </div>
              <Link
                to={"/profile/daftar-alamat"}
                className="text-decoration-none"
              >
                Pilih Alamat
              </Link>
            </div>
          )}
          <div className="ps-0">
            <LabelInput labelText={"Deskripsi Masalah"} />
            <span className="text-danger"> *</span>
            <textarea
              className="form-control"
              name="deskripsi_masalah"
              value={deskripsiMasalah}
              onChange={(e) => setDeskripsiMasalah(e.target.value)}
              id=""
              cols="30"
              rows="10"
              placeholder="Masukkan Deskripsi Masalah...."
              required
            ></textarea>
          </div>
          {errors.deskripsiMasalah && (
            <div className="text-danger">{errors.deskripsiMasalah}</div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <div className="d-flex column-gap-3">
          <>
            <ActionButtonOutline onClick={props.onHide} text={"Kembali"} />
            <ActionButton
              onClick={handleSubmit}
              text={"Booking"}
              type={"button"}
            />
          </>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormBooking;
