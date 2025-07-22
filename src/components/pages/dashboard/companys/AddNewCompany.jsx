import { Card } from "react-bootstrap";
import { useState } from "react";
import LabelInput from "@/components/atoms/LabelInput";
import ReactQuill from "react-quill";
import ActionButton from "@/components/atoms/ActionButton";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCompanySchema } from "@/schema/company.schema";
import { useMutation } from "@tanstack/react-query";
import PartnersServices from "@/services/partner.service";
import { swal } from "@/utils/sweetAlert.js";
import BackButton from "@/components/molecules/dashboard/BackButton";

const AddNewCompany = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(createCompanySchema),
    defaultValues: {
      description: "", // <-- atasi undefined
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("profile_image", file);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: PartnersServices.mutationCreatePartner,
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      reset({
        description: "",
      });

      setImagePreview(null);
    },
    onError: (error) => {
      swal({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Tutup",
      });
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("profile_image", data.profile_image);
    formData.append("name", data.name);
    formData.append("province", data.province);
    formData.append("city", data.city);
    formData.append("district", data.district);
    formData.append("description", data.description);
    formData.append("link_map", data.link_map);

    console.log([...formData.entries()]);

    mutate(formData);
  };

  return (
    <div>
      <BackButton
        text={"Add New Company"}
        showBack={true}
        path={"/dashboard/companys"}
      />
      <div className="mt-5">
        <h4>Company Image</h4>
        <form
          className="needs-validation"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div>
            <Card border="0" className="shadow-sm">
              <Card.Body>
                <div className="row" style={{ height: 200 }}>
                  <label className="col-6 h-100">
                    <div
                      className="h-100"
                      style={{
                        width: "100%",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#aaa",
                        marginBottom: 16,
                        border: "2px dashed #ef3d01",
                        borderRadius: 4,
                      }}
                    >
                      {imagePreview ? "change image" : "No Image Selected"}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </label>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        aspectRatio: "1 / 1", // selalu kotak
                        objectFit: "cover", // isi penuh tanpa distorsi
                        borderRadius: 8,
                        marginBottom: 16,
                        height: "100%",
                      }}
                      className="col-6 mx-auto d-block" // agar otomatis di tengah
                    />
                  )}
                </div>
                {errors.profile_image && (
                  <div className="text-danger">
                    {errors.profile_image.message}
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
          <div className="mt-5">
            <h4>Company Info</h4>
            <Card border="0" className="shadow-sm h-100">
              <Card.Body className="h-100">
                <div className="mb-3">
                  <LabelInput target={"name"} labelText={"Company Name"} />
                  <input
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput
                    target={"province"}
                    labelText={"Company Province"}
                  />
                  <input
                    className={`form-control ${
                      errors.province ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("province")}
                  />
                  {errors.province && (
                    <div className="invalid-feedback">
                      {errors.province.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput target={"city"} labelText={"Company City"} />
                  <input
                    className={`form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("city")}
                  />
                  {errors.city && (
                    <div className="invalid-feedback">
                      {errors.city.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput
                    target={"district"}
                    labelText={"Company District"}
                  />
                  <input
                    className={`form-control ${
                      errors.district ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("district")}
                  />
                  {errors.district && (
                    <div className="invalid-feedback">
                      {errors.district.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput
                    target={"link_map"}
                    labelText={"Company Link Map"}
                  />
                  <input
                    className={`form-control ${
                      errors.link_map ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("link_map")}
                  />
                  {errors.link_map && (
                    <div className="invalid-feedback">
                      {errors.link_map.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput
                    target={"description"}
                    labelText={"Company Description"}
                  />
                  <ReactQuill
                    theme="snow"
                    placeholder="Describe your company..."
                    style={{
                      height: 300,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onChange={(value) => setValue("description", value)}
                    modules={{
                      toolbar: [
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                      ],
                    }}
                  />
                  {errors.description && (
                    <div className="text-danger">
                      {errors.description.message}
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-end gap-3 mt-4">
              <Link
                to={"/dashboard/companys"}
                style={{ textDecoration: "none" }}
              >
                <ActionButtonOutline
                  disabled={isPending}
                  type={"button"}
                  text={"Cancel"}
                />
              </Link>
              <ActionButton
                disabled={isPending}
                type={"submit"}
                text={"Add Company"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCompany;
