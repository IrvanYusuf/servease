import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Card, Dropdown, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { useMutation, useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";
import { NumericFormat } from "react-number-format";
import SkeletonTable from "@/components/organisms/dashboard/SkeletonTable";
import DashboardPartnerBookingService from "@/services/dashboard/partner/bookingPartner.service";
import StatusPembayaran from "@/components/atoms/StatusPembayaran";
import StatusTransaksi from "@/components/atoms/StatusTransaksi";
import { truncateText } from "@/utils/text";
import { formatDate } from "@/utils/formattedDate";
import { FaCheck, FaEye } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { swal } from "@/utils/sweetAlert";
import queryClient from "@/utils/queryClient";

const DashboardBookingPage = () => {
  const { data: dataServices, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: ServicesServices.getAllServices,
  });

  const {
    data: dataDashboardBookings,
    isLoading: isLoadingDataDashboardBookings,
  } = useQuery({
    queryKey: ["dashboard-partner-booking"],
    queryFn: DashboardPartnerBookingService.getAllPartnerBookings,
  });

  const { mutate: confirmBookingMutate, isLoading: isLoadingConfirmBooking } =
    useMutation({
      mutationFn: ({ customerId, bookingId }) =>
        DashboardPartnerBookingService.confirmBooking(customerId, bookingId),
      onSuccess: (res) => {
        swal({
          title: "Success",
          text: res.message,
          icon: "success",
          confirmButtonText: "Tutup",
        });
        queryClient.invalidateQueries(["dashboard-partner-booking"]);
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

  const handleConfirmedBooking = (customerId, bookingId) => {
    confirmBookingMutate({ customerId, bookingId });
  };

  return (
    <div>
      <h5>Booking</h5>
      {/* <pre>{JSON.stringify(dataDashboardBookings, null, 2)}</pre> */}
      <div className="mt-5">
        <Card border="0" className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-end">
              {dataServices?.data?.length < 5 && (
                <Link
                  to={"/dashboard/services/new"}
                  style={{ textDecoration: "none" }}
                >
                  <ActionButtonOutline
                    text="Add New"
                    icon={<IoAddOutline size={24} />}
                  />
                </Link>
              )}
            </div>

            <div className="d-flex justify-content-between mt-4 align-items-center">
              <h5>All Bookings Data</h5>
              <div className="d-flex align-items-center gap-3">
                <Form.Control
                  type="search"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="search here...."
                />
              </div>
            </div>
            <div
              style={{
                overflowX: "auto",
                width: "100%",
                position: "static",
              }}
              className="mt-3"
            >
              <div className="h-100 pb-5">
                <Table style={{ width: "1200px" }}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Thumbnail</th>
                      <th>Service</th>
                      <th>Customer</th>
                      <th>Booking Status</th>
                      <th>Payment Status</th>
                      <th>Total Price</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoadingDataDashboardBookings ? (
                      <SkeletonTable column={10} />
                    ) : dataDashboardBookings?.data?.length === 0 ? (
                      <tr>
                        <td colSpan={10} className="text-center">
                          No booking data
                        </td>
                      </tr>
                    ) : (
                      dataDashboardBookings?.data?.map((booking, index) => (
                        <tr key={booking._id}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={booking.service_id.thumbnail}
                              alt={booking.service_id.name}
                              style={{
                                width: 60,
                                aspectRatio: "1/1",
                                objectFit: "cover",
                              }}
                              className="rounded-3"
                            />
                          </td>
                          <td style={{ width: "150px" }}>
                            {truncateText({
                              text: booking.service_id.name,
                              length: 10,
                            })}
                          </td>
                          <td style={{ width: "150px" }}>
                            {booking.user_id.name}
                          </td>
                          <td style={{ width: "150px" }}>
                            <StatusTransaksi
                              textStatus={booking.status.toUpperCase()}
                            />
                          </td>
                          <td style={{ width: "180px" }}>
                            <StatusPembayaran
                              textStatus={booking.payment_status.toUpperCase()}
                            />
                          </td>
                          <td style={{ width: "150px" }}>
                            <NumericFormat
                              value={booking.total_price}
                              displayType="text"
                              prefix="Rp "
                              thousandSeparator={"."}
                              decimalSeparator=","
                            />
                          </td>
                          <td style={{ width: "180px" }}>
                            {formatDate({
                              date: booking.booking_date,
                              show: "",
                            })}
                          </td>
                          <td style={{ width: "180px" }}>
                            {booking.booking_time}
                          </td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle variant="secondary" size="sm">
                                Aksi
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                {booking.status === "pending" && (
                                  <>
                                    <Dropdown.Item
                                      as={Link}
                                      to={`/dashboard/bookings/${booking._id}`}
                                      className="d-flex align-items-center gap-2 text-primary"
                                    >
                                      <FaEye /> Lihat Detail
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                      onClick={() =>
                                        handleConfirmedBooking(
                                          booking?.user_id._id,
                                          booking._id
                                        )
                                      }
                                      className="d-flex align-items-center gap-2 text-success"
                                    >
                                      <FaCheckCircle /> Konfirmasi
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                      onClick={() => {}}
                                      className="d-flex align-items-center gap-2 text-danger"
                                    >
                                      <FaTimesCircle /> Batalkan
                                    </Dropdown.Item>
                                  </>
                                )}

                                {booking.status === "confirmed" && (
                                  <>
                                    <Dropdown.Item
                                      onClick={() => {}}
                                      className="d-flex align-items-center gap-2 text-success"
                                    >
                                      <FaCheck /> Tandai Selesai
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      onClick={() => {}}
                                      className="d-flex align-items-center gap-2 text-danger"
                                    >
                                      <FaTimesCircle /> Batalkan
                                    </Dropdown.Item>
                                  </>
                                )}

                                {(booking.status === "completed" ||
                                  booking.status === "cancelled") && (
                                  <Dropdown.Item
                                    as={Link}
                                    to={`/dashboard/bookings/${booking._id}`}
                                    className="d-flex align-items-center gap-2 text-primary"
                                  >
                                    <FaEye /> Lihat Detail
                                  </Dropdown.Item>
                                )}
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DashboardBookingPage;
