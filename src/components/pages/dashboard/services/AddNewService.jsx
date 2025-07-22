import { useState } from "react";
import { Card } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import "@/styles/pages/dashboard/AddNewService.css";
import LabelInput from "@/components/atoms/LabelInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import PartnersServices from "@/services/partner.service";
import CategoriesService from "@/services/category.service";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import ActionButton from "@/components/atoms/ActionButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createServiceSchema } from "@/schema/service.schema";
import ReactQuill from "react-quill";
import ServicesServices from "@/services/service.service";
import { swal } from "@/utils/sweetAlert";

const AddNewService = () => {
  const [imageGallery, setImageGallery] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("thumbnail", file);
    }
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    let newFiles = files;
    setValue("gallery_images", files);

    if (files.length >= 7) {
      // Hapus 2 item terakhir
      newFiles = files.slice(0, files.length - 2);
    }

    const newImages = newFiles.map((file) => URL.createObjectURL(file));
    setImageGallery((prev) => [...prev, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    const deleteImages = imageGallery.filter((value, idx) => idx !== index);
    setImageGallery(deleteImages);
    const currentFiles = getValues("gallery_images");
    const updatedFiles = currentFiles.filter((_, idx) => idx !== index);
    setValue("gallery_images", updatedFiles);
  };

  const { data: dataPartners, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: PartnersServices.getAllPartners,
  });

  // categories
  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: CategoriesService.getAllCategories,
  });

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      price: "0",
      gallery_images: [],
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ServicesServices.mutationCreateService,
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      reset({
        price: "0",
        gallery_images: [],
        description: "",
        name: "",
        partner_id: "",
        category_id: "",
      });

      setImageGallery([]);
      setImagePreview(null);
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

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("partner_id", data.partner_id);
    formData.append("category_id", data.category_id);
    formData.append("description", data.description);

    formData.append("thumbnail", data.thumbnail);
    data.gallery_images.forEach((file) => {
      formData.append("gallery_images", file);
    });

    mutate(formData);
  };

  return (
    <div>
      <h4>Add New Service</h4>

      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          noValidate
          className="needs-validation"
        >
          <h4>Thumbnail Service</h4>
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
                    onChange={handleImagePreview}
                  />
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: 16,
                      height: "100%",
                    }}
                    className="col-6 mx-auto d-block"
                  />
                )}
              </div>
              {errors.thumbnail && (
                <div className="text-danger">{errors.thumbnail.message}</div>
              )}
            </Card.Body>
          </Card>
          <div className="mt-5">
            <h4>Gallery Image (max 7)</h4>
            <Card border="0" className="shadow-sm">
              <Card.Body>
                <div className="scroll-container py-3">
                  {imageGallery.length > 0 ? (
                    imageGallery.map((img, index) => (
                      <div
                        className="position-relative"
                        key={index}
                        style={{ overflow: "visible", flexShrink: 0 }}
                      >
                        <img
                          src={img}
                          alt={`Gallery-${index}`}
                          style={{
                            height: 120,
                            width: 120,
                            objectFit: "cover",
                            borderRadius: 8,
                            flex: "0 0 auto",
                          }}
                          className="border"
                        />
                        <div
                          className="position-absolute text-danger bg-white rounded-circle"
                          style={{
                            right: 0,
                            top: 0,
                            transform: "translate(50%, -50%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDeleteImage(index)}
                        >
                          <IoIosCloseCircle size={24} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <label
                      style={{
                        display: "inline-block",
                        marginTop: 20,
                        cursor: "pointer",
                        color: "#ef3d01",
                        fontWeight: "bold",
                      }}
                      className="w-100"
                    >
                      <div
                        style={{
                          backgroundColor: "#f0f0f0",
                          color: "#aaa",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: 120,
                          borderRadius: 8,
                          border: "2px dashed #ef3d01",
                        }}
                      >
                        No Images Selected
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>
                <div>
                  {imageGallery.length > 7 && (
                    <span className="text-danger">max image gallery 7</span>
                  )}
                </div>
                {imageGallery.length < 7 && (
                  <label
                    style={{
                      display: "inline-block",
                      marginTop: 20,
                      cursor: "pointer",
                      color: "#ef3d01",
                      fontWeight: "bold",
                    }}
                  >
                    + Add Images
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </label>
                )}
                {errors.gallery_images && (
                  <div className="text-danger">
                    {errors.gallery_images.message}
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
          <div className="mt-5">
            <h4>Service Info</h4>
            <Card border="0" className="shadow-sm">
              <Card.Body>
                <div className="mb-3">
                  <LabelInput target={"name"} labelText={"Service Name"} />
                  <span className="text-danger"> *</span>
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
                  <LabelInput target={"price"} labelText={"Service Price"} />
                  <span className="text-danger"> *</span>
                  <NumericFormat
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp "
                    allowNegative={false}
                    placeholder="Rp 0"
                    onValueChange={(values) => {
                      setValue("price", values.value);
                    }}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">
                      {errors.price.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput labelText={"Select Company"} />
                  <span className="text-danger"> *</span>
                  <select
                    className={`form-control ${
                      errors.partner_id ? "is-invalid" : ""
                    }`}
                    aria-label="Default select example"
                    name="partner_id"
                    {...register("partner_id")}
                  >
                    <option value="" disabled hidden>
                      Select Company
                    </option>

                    {isLoading ? (
                      <option disabled>Loading...</option>
                    ) : (
                      dataPartners?.data?.map((partner) => (
                        <option key={partner._id} value={partner._id}>
                          {partner.name}
                        </option>
                      ))
                    )}
                  </select>

                  {errors.partner_id && (
                    <div className="invalid-feedback">
                      {errors.partner_id.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <LabelInput labelText={"Select Category"} />
                  <span className="text-danger"> *</span>
                  <select
                    className={`form-control ${
                      errors.category_id ? "is-invalid" : ""
                    }`}
                    aria-label="Default select example"
                    name="category_id"
                    {...register("category_id")}
                  >
                    <option value="" disabled hidden>
                      Select Category
                    </option>
                    {isLoading ? (
                      <option disabled>Loading...</option>
                    ) : (
                      categoriesData?.data?.map((category, index) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))
                    )}
                  </select>
                  {errors.category_id && (
                    <div className="invalid-feedback">
                      {errors.category_id.message}
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
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <Link to={"/dashboard/services"} style={{ textDecoration: "none" }}>
              <ActionButtonOutline
                disabled={isPending}
                type={"button"}
                text={"Cancel"}
                className="h-100"
              />
            </Link>
            <ActionButton
              disabled={isPending}
              type={"submit"}
              text={"Add Service"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
