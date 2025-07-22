import { Modal } from "react-bootstrap";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import ActionButton from "@/components/atoms/ActionButton";
import LabelInput from "@/components/atoms/LabelInput";
import { swal } from "@/utils/sweetAlert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAddressSchema } from "@/schema/address.schema";
import { useMutation } from "@tanstack/react-query";
import AddressesService from "@/services/address.service";
import queryClient from "@/utils/queryClient";

const ModalFormTambahAlamat = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAddressSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: AddressesService.mutationCreateAddress,
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      queryClient.invalidateQueries(["addresses"]);
      reset();
    },
    onError: (error) => {
      console.log(error);
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const handleTambahAlamat = async (data) => {
    mutate(data);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      <Modal.Body>
        <form onSubmit={handleSubmit(handleTambahAlamat)} noValidate>
          <div className="col mb-3">
            <LabelInput labelText={"Label Alamat"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className={`form-control ${
                errors.label_alamat ? "is-invalid" : ""
              }`}
              name="label_alamat"
              placeholder="Mis. Rumah / Kantor"
              {...register("label_alamat")}
            />
            {errors.label_alamat && (
              <div className="invalid-feedback">
                {errors.label_alamat.message}
              </div>
            )}
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"No Hp"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              name="no_telp"
              placeholder="Masukkan Nomor Telepon...."
              {...register("phone")}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Provinsi"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="provinsi"
              className={`form-control ${errors.province ? "is-invalid" : ""}`}
              placeholder="Masukkan Provinsi...."
              {...register("province")}
            />
            {errors.province && (
              <div className="invalid-feedback">{errors.province.message}</div>
            )}
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kabupaten/Kota"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="kabupaten"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              placeholder="Masukkan Kabupaten atau Kota...."
              {...register("city")}
            />
            {errors.city && (
              <div className="invalid-feedback">{errors.city.message}</div>
            )}
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Kecamatan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="kecamatan"
              className={`form-control ${errors.district ? "is-invalid" : ""}`}
              placeholder="Masukkan Kecamatan...."
              {...register("district")}
            />
            {errors.district && (
              <div className="invalid-feedback">{errors.district.message}</div>
            )}
          </div>
          <div className="col mb-3">
            <LabelInput labelText={"Nama Jalan"} />
            <span className="text-danger"> *</span>
            <input
              type="text"
              name="nama_jalan"
              className={`form-control ${
                errors.street_name ? "is-invalid" : ""
              }`}
              placeholder="Masukkan Nama Jalan...."
              {...register("street_name")}
            />
            {errors.street_name && (
              <div className="invalid-feedback">
                {errors.street_name.message}
              </div>
            )}
          </div>
          <div className="col">
            <LabelInput labelText={"Deskripsi"} />
            <textarea
              name="deskripsi"
              id=""
              cols="30"
              rows="6"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              {...register("description")}
            ></textarea>
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>
          <div className="d-flex justify-content-end column-gap-3 mt-4">
            <div>
              <ActionButtonOutline
                onClick={props.onHide}
                type={"button"}
                text={"Batal"}
                className="h-100"
                disabled={isPending}
              />
            </div>
            <div>
              <ActionButton
                text={"Simpan"}
                type={"submit"}
                disabled={isPending}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFormTambahAlamat;
