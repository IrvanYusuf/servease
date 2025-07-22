import { useState } from "react";
import ModalFormTambahAlamat from "@/components/molecules/ModalFormTambahAlamat";
import ModalFormEditAlamat from "@/components/molecules/ModalFormEditAlamat";
import { useAuth } from "@/context/authContext";
import { jwtDecode } from "jwt-decode";
import { apiAddress } from "@/api/apiAddress";
import Swal from "sweetalert2";
import NotFoundSection from "@/components/organisms/NotFoundSection";
import { useMutation, useQuery } from "@tanstack/react-query";
import AddressesService from "@/services/address.service";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import ActionButton from "@/components/atoms/ActionButton";
import queryClient from "@/utils/queryClient";
import { swal } from "@/utils/sweetAlert";
import CardAlamat from "../molecules/CardAlamat";

const DaftarAlamat = () => {
  const [showModalAlamat, setShowModalAlamat] = useState(false);
  const [showModalEditAlamat, setShowModalEditAlamat] = useState(false);
  const [idAlamat, setIdAlamat] = useState("");
  const { token } = useAuth();
  const decoded = token ? jwtDecode(token) : null;

  const handleShowModalAlamat = () => {
    setShowModalAlamat(true);
  };
  const handleCloseModalAlamat = () => {
    setShowModalAlamat(false);
  };

  const handleShowModalEditAlamat = (idAlamat) => {
    setIdAlamat(idAlamat);
    setShowModalEditAlamat(true);
  };
  const handleCloseModalEditAlamat = () => setShowModalEditAlamat(false);

  const handleDeleteAddress = async (id) => {
    swal({
      title: "Delete Address?",
      text: "Are you sure you want to delete this address?",
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        mutateDelete(id);
      }
    });
  };

  const { data: addresses, isLoading } = useQuery({
    queryKey: ["addresses"],
    queryFn: AddressesService.getAllAddresses,
  });

  // delete address
  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationFn: AddressesService.deleteAddress,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["addresses"]);
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
    },
    onError: (error) => {
      console.error(error);
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  // set primary address
  const { mutate, isPending } = useMutation({
    mutationFn: AddressesService.setPrimaryAddress,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["addresses"]);
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
    },
    onError: (error) => {
      console.error(error);
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const handlePrimaryAddress = async (id) => {
    swal({
      title: "Set as Primary Address?",
      text: "Are you sure you want to set this as your primary address?",
      icon: "warning",
      confirmButtonText: "Set as primary",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  };
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <div className="d-flex flex-md-row flex-column justify-content-between py-3">
        <h4 style={{ textAlign: "left" }}>Daftar Alamat (Maks 3)</h4>
        {addresses?.data?.length < 3 && (
          <div>
            <ActionButton
              text={"+ Tambah Alamat"}
              onClick={handleShowModalAlamat}
              className="w-100 mt-3 mt-md-0"
            />
          </div>
        )}
      </div>
      <div className="h-100 mt-2 overflow-y-auto">
        <div className="h-100">
          {isLoading ? (
            "loading"
          ) : addresses.data.length === 0 ? (
            <NotFoundSection />
          ) : (
            addresses.data.map((address, i) => (
              <CardAlamat
                key={i}
                address={address}
                handleDeleteAddress={handleDeleteAddress}
                handlePrimaryAddress={handlePrimaryAddress}
                handleShowModalEditAlamat={handleShowModalEditAlamat}
              />
            ))
          )}
        </div>
      </div>
      <ModalFormTambahAlamat
        show={showModalAlamat}
        onHide={handleCloseModalAlamat}
        getAllAddress={() => {}}
      />
      <ModalFormEditAlamat
        show={showModalEditAlamat}
        onHide={handleCloseModalEditAlamat}
        idAddress={idAlamat}
      />
    </div>
  );
};

export default DaftarAlamat;
