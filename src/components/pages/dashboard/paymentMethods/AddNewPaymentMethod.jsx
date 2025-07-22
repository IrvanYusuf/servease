import { Card } from "react-bootstrap";
import { useState } from "react";
import LabelInput from "@/components/atoms/LabelInput";
import ActionButton from "@/components/atoms/ActionButton";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import PaymentMethodService from "@/services/paymentMethod.service";
import { swal } from "@/utils/sweetAlert";
import BackButton from "@/components/molecules/dashboard/BackButton";
import { createPaymentMethodSchema } from "@/schema/paymentMethod.schema";

const AddNewPaymentMethod = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(createPaymentMethodSchema),
  });

  const selectedMethod = watch("type");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("bank_logo", file);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: PaymentMethodService.mutationPaymentMethod,
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      reset();
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
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("description", data.description || "");
    if (data.bank_logo) formData.append("bank_logo", data.bank_logo);
    if (selectedMethod === "bank_transfer") {
      formData.append("bank_name", data.bank_name);
      formData.append("account_number", data.account_number);
      formData.append("account_holder", data.account_holder);
    }

    mutate(formData);
  };

  return (
    <div>
      <BackButton
        text={"Add Payment Method"}
        showBack={true}
        path={"/dashboard/payment-methods"}
      />
      <form
        className="mt-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <Card border="0" className="shadow-sm">
          <Card.Body>
            <div className="mb-3">
              <LabelInput target={"name"} labelText={"Name"} />
              <span className="text-danger"> *</span>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <div className="text-danger">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-3">
              <LabelInput target={"type"} labelText={"Payment Method Type"} />
              <span className="text-danger"> *</span>
              <select
                className={`form-control ${errors.type ? "is-invalid" : ""}`}
                {...register("type")}
              >
                <option value="">-- Select Method --</option>
                <option value="cash">Cash</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
              {errors.type && (
                <div className="invalid-feedback">{errors.type.message}</div>
              )}
            </div>

            <div className="mb-3">
              <LabelInput target={"description"} labelText={"Description"} />
              <textarea
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                {...register("description")}
              ></textarea>
            </div>

            {selectedMethod === "bank_transfer" && (
              <>
                <div className="mb-3">
                  <LabelInput target={"bank_logo"} labelText={"Bank Logo"} />
                  <span className="text-danger"> *</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="form-control"
                  />
                  {errors.bank_logo && (
                    <div className="text-danger">
                      {errors.bank_logo.message}
                    </div>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Bank Logo Preview"
                      style={{
                        width: 120,
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    />
                  )}
                </div>

                <div className="mb-3">
                  <LabelInput target={"bank_name"} labelText={"Bank Name"} />
                  <span className="text-danger"> *</span>
                  <input
                    className={`form-control ${
                      errors.bank_name ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("bank_name")}
                  />
                  {errors.bank_name && (
                    <div className="text-danger">
                      {errors.bank_name.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <LabelInput
                    target={"account_number"}
                    labelText={"Account Number"}
                  />
                  <span className="text-danger"> *</span>
                  <input
                    className={`form-control ${
                      errors.account_number ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("account_number")}
                  />
                  {errors.account_number && (
                    <div className="text-danger">
                      {errors.account_number.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <LabelInput
                    target={"account_holder"}
                    labelText={"Account Holder"}
                  />
                  <span className="text-danger"> *</span>
                  <input
                    className={`form-control ${
                      errors.account_holder ? "is-invalid" : ""
                    }`}
                    type="text"
                    {...register("account_holder")}
                  />
                  {errors.account_holder && (
                    <div className="text-danger">
                      {errors.account_holder.message}
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="d-flex justify-content-end gap-3">
              <Link
                to={"/dashboard/payment-methods"}
                className="h-100 text-decoration-none"
              >
                <ActionButtonOutline
                  type={"button"}
                  text={"Cancel"}
                  className="h-100"
                />
              </Link>
              <ActionButton
                type={"submit"}
                disabled={isPending}
                text={"Save"}
              />
            </div>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
};

export default AddNewPaymentMethod;
