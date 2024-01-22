import React, { useEffect, useState } from "react";
import ActionButtonGray from "../../atoms/ActionButtonGray";
import ModalEditUsernameMitra from "../../molecules/mitra/ModalEditUsernameMitra";
import ModalEditNoTelpMitra from "../../molecules/mitra/ModalEditNoTelpMitra";
import ModalEditEmailMitra from "../../molecules/mitra/ModalEditEmailMitra";
import ModalEditPasswordMitra from "../../molecules/mitra/ModalEditPasswordMitra";
import { useAuth } from "../../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiUser } from "../../../api/apiUser";
import profileImg from "../../../assets/icon/profile.png";
import { hideEmail, hidePhoneNumber } from "../../../utils/text";

const PengaturanAkunMitra = () => {
  const { token } = useAuth();
  const [singleUser, setSingleUser] = useState({});
  const decoded = token ? jwtDecode(token) : null;

  const getSingleUser = async () => {
    try {
      const response = await fetch(`${apiUser}/detail/${decoded.id}`, {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const [result] = data.data;
      setSingleUser(result);
    } catch (error) {
      console.log(error);
    }
  };
  // Modal Edit Username Mitra
  const [showModalEditUsernameMitra, setShowModalEditUsernameMitra] =
    useState(false);

  // Modal Edit No Telp Mitra
  const [showModalEditNoTelpMitra, setShowModalEditNoTelpMitra] =
    useState(false);

  // Modal Edit Email Mitra
  const [showModalEditEmailMitra, setShowModalEditEmailMitra] = useState(false);

  // Modal Edit Password Mitra
  const [showModalEditPasswordMitra, setShowModalEditPasswordMitra] =
    useState(false);

  useEffect(() => {
    getSingleUser();
  }, [token]);
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="mt-2">
        <h4>Pengaturan Akun</h4>
        <span>Ubah pengaturan dasar akun anda</span>
      </div>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <th>
              <div>
                <span className="fw-medium">Profil saya</span>
              </div>
            </th>
            <td>
              <div className="d-flex align-items-center column-gap-3">
                <img
                  src={
                    singleUser.img
                      ? `http://localhost:3000/images/gallery/${singleUser.img}`
                      : profileImg
                  }
                  width={"40px"}
                  height={"40px"}
                  className="rounded-circle"
                  alt=""
                />
                <span>{singleUser.username}</span>
              </div>
            </td>
            <td className="d-flex justify-content-end">
              <div>
                <ActionButtonGray
                  text={"Ubah"}
                  onClick={() => setShowModalEditUsernameMitra(true)}
                />
                {/* <button>Ubah</button> */}
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div>
                <span className="fw-medium">Telepon</span>
              </div>
            </th>
            <td>{singleUser.no_telp && hidePhoneNumber(singleUser.no_telp)}</td>
            <td className="d-flex justify-content-end">
              <div>
                <ActionButtonGray
                  text={"Ubah"}
                  onClick={() => setShowModalEditNoTelpMitra(true)}
                />
                {/* <button>Ubah</button> */}
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div>
                <span className="fw-medium">Email</span>
              </div>
            </th>
            <td>{singleUser.email && hideEmail(singleUser.email)}</td>
            <td className="d-flex justify-content-end">
              <div>
                <ActionButtonGray
                  text={"Ubah"}
                  onClick={() => setShowModalEditEmailMitra(true)}
                />
                {/* <button>Ubah</button> */}
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div>
                <span className="fw-medium">Password</span>
              </div>
            </th>
            <td className="text-secondary">
              Harap ganti password secara berkala
            </td>
            <td className="d-flex justify-content-end">
              <div>
                <ActionButtonGray
                  text={"Perbarui"}
                  onClick={() => setShowModalEditPasswordMitra(true)}
                />
                {/* <button>Ubah</button> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ModalEditUsernameMitra
        show={showModalEditUsernameMitra}
        onHide={() => setShowModalEditUsernameMitra(false)}
        getSingleUser={getSingleUser}
      />
      <ModalEditNoTelpMitra
        show={showModalEditNoTelpMitra}
        onHide={() => setShowModalEditNoTelpMitra(false)}
        getSingleUser={getSingleUser}
      />
      <ModalEditEmailMitra
        show={showModalEditEmailMitra}
        onHide={() => setShowModalEditEmailMitra(false)}
        getSingleUser={getSingleUser}
      />
      <ModalEditPasswordMitra
        show={showModalEditPasswordMitra}
        onHide={() => setShowModalEditPasswordMitra(false)}
        getSingleUser={getSingleUser}
      />
    </div>
  );
};

export default PengaturanAkunMitra;
