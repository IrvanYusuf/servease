import { Card } from "react-bootstrap";
import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import ActionButton from "@/components/atoms/ActionButton";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";
import { useSearchParams } from "react-router-dom";
import BookingsServices from "@/services/booking.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createReviewSchema } from "@/schema/review.schema";
import ReviewsServices from "@/services/review.service";
import { swal } from "@/utils/sweetAlert";
import queryClient from "@/utils/queryClient";

const CreateReview = () => {
  const [ratingValue, setRatingValue] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const booking_id = searchParams.get("booking_id");

  const handleRating = (i) => {
    setRatingValue(i + 1);
    setValue("rating", i + 1);
  };

  const { data: dataBooking, isLoading } = useQuery({
    queryKey: ["booking", booking_id],
    queryFn: () => BookingsServices.getDetailBooking(booking_id),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ bookingId, payload }) =>
      ReviewsServices.mutationCreateReview(bookingId, payload),
    onSuccess: (res) => {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
        confirmButtonText: "Tutup",
      });
      queryClient.invalidateQueries(["booking", booking_id]);
      reset();
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

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      rating: 5,
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      service_id: dataBooking?.data.service_id._id,
      owner_id: dataBooking?.data.service_id.user_id._id,
      partner_id: dataBooking?.data.partner_id._id,
      ...data,
    };
    mutate({ bookingId: booking_id, payload });
  };

  return (
    <div className="container w-100">
      {/* <pre>{JSON.stringify(dataBooking, null, 2)}</pre> */}
      <div className="d-flex flex-column align-items-center justify-content-center">
        {dataBooking?.data?.review_status !== "reviewed" && (
          <h4 className="text-center">Rating & Ulasan</h4>
        )}

        <div className="row w-100 justify-content-center mt-4">
          {dataBooking?.data?.review_status !== "reviewed" ? (
            <div className="col-lg-9 col-12 px-0">
              <Card className="w-100 shadow-sm">
                <Card.Body className="p-lg-5">
                  <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <h5 className="text-secondary">
                        Bagaimana kualitas layanan secara keseluruhan?
                      </h5>
                      <div className="d-flex column-gap-3 mt-3">
                        {Array.from({ length: 5 }, (v, i) => (
                          <FaStar
                            key={i}
                            size={"30px"}
                            onClick={() => handleRating(i)}
                            className={
                              ratingValue > i
                                ? "text-warning"
                                : "text-secondary"
                            }
                            onMouseOver={() => handleRating(i)}
                          />
                        ))}
                      </div>
                      <h5 className="text-secondary mt-4">
                        Berikan ulasan untuk layanan ini
                      </h5>
                      <textarea
                        className={`form-control mt-3 ${
                          errors.comment ? "is-invalid" : ""
                        }`}
                        name="deskripsi"
                        id=""
                        cols="30"
                        rows="8"
                        placeholder="Tulis deskripsi anda mengenai layanan ini...."
                        {...register("comment")}
                      />
                      {errors.comment && (
                        <div className="text-danger mt-2">
                          {errors.comment.message}
                        </div>
                      )}
                      <div className="d-flex justify-content-end column-gap-3 mt-3">
                        <div>
                          <ActionButtonOutline
                            text={"Batal"}
                            type={"button"}
                            disabled={isPending}
                          />
                        </div>
                        <div>
                          <ActionButton
                            text={"Kirim"}
                            disabled={isPending}
                            type={"submit"}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div className="col-lg-9 col-12 px-0 d-flex flex-column align-items-center">
              <img
                src="/img/feedback.png"
                alt="Review Completed"
                style={{ maxWidth: "300px" }}
                className="mb-4"
              />
              <h5 className="text-center text-secondary">
                Terima kasih! Kamu sudah memberikan ulasan untuk layanan ini.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
