import { useState } from "react";
import "@/styles/pages/BiodataDiri.css";
import ActionButton from "@/components/atoms/ActionButton";
import ModalFormEditUser from "@/components/molecules/ModalFormEditUser";
import ModalFormTambahAlamat from "@/components/molecules/ModalFormTambahAlamat";
import { useAuth } from "@/context/authContext";
import profileImg from "@/assets/icon/profile.png";
import ModalUpdateFoto from "@/components/molecules/ModalUpdateFoto";
import { useQuery } from "@tanstack/react-query";
import UsersServices from "@/services/user.service";
import { truncateText } from "@/utils/text";
import { formatDate } from "@/utils/formattedDate";

const BiodataDiri = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalImage, setShowModalImage] = useState(false);
  const { decodedToken } = useAuth();

  const handleShowModalEdit = () => {
    setShowModalEdit(true);
  };
  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const handleShowImageEdit = () => {
    setShowModalImage(true);
  };

  const { data: dataUser, isLoading } = useQuery({
    queryKey: ["user", decodedToken.id],
    queryFn: () => UsersServices.getUser(decodedToken.id),
  });

  if (isLoading) {
    return "loading....";
  }
  console.log(dataUser);

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between py-3">
        <h4>Biodata Diri</h4>
        <div>
          <ActionButton text={"Ubah"} onClick={handleShowModalEdit} />
        </div>
      </div>
      <div className="row w-100">
        <div className="col-lg-4 d-flex flex-column align-items-center">
          <img
            src={dataUser.profile_url ? dataUser.profile_url : profileImg}
            alt=""
            className="rounded-3 profile-image"
          />
          <div className="w-100">
            <button
              className="btn pilihFoto w-100"
              onClick={handleShowImageEdit}
            >
              Ubah Foto
            </button>
          </div>
        </div>
        <div className="col-lg-8 mt-4 mt-lg-0">
          <table>
            <tr>
              <td className="px-4 py-2">Username</td>
              <td className="ps-2">{dataUser.data.username}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Nama</td>
              <td className="ps-2">{dataUser.data.name}</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tanggal Lahir</td>
              <td className="ps-2">
                {formatDate({ date: dataUser.data.birthDate })}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jenis Kelamin</td>
              <td className="ps-2">
                {dataUser.data.gender === "MALE" ? "LAKI-LAKI" : "PEREMPUAN"}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Email</td>
              <td className="ps-2 d-flex flex-wrap">
                {truncateText({ text: dataUser.data.email, length: 20 })}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Nomor Handphone</td>
              <td className="ps-2">{dataUser.data.phone}</td>
            </tr>
          </table>
        </div>
      </div>
      <ModalFormEditUser
        show={showModalEdit}
        onHide={handleCloseModalEdit}
        dataUser={dataUser}
      />
      <ModalUpdateFoto
        show={showModalImage}
        onHide={() => setShowModalImage(false)}
      />
    </div>
  );
};

export default BiodataDiri;
