import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { Card, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import ServicesServices from "@/services/service.service";
import { NumericFormat } from "react-number-format";
import SkeletonTable from "@/components/organisms/dashboard/SkeletonTable";

const ReviewPage = () => {
  const { data: dataServices, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: ServicesServices.getAllServices,
  });

  return (
    <div>
      <h5>Service</h5>
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
              <h5>All Your Services</h5>
              <div className="d-flex align-items-center gap-3">
                <Form.Control
                  type="search"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="search here...."
                />
              </div>
            </div>
            <Table className="mt-3">
              <thead>
                <tr className="rounded-2">
                  <th>No</th>
                  <th>Thumbnail</th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <SkeletonTable />
                ) : dataServices.data.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center">
                      No data service
                    </td>
                  </tr>
                ) : (
                  <>
                    {dataServices?.data?.map((service, index) => (
                      <tr key={service._id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={service.thumbnail}
                            alt={service.name}
                            style={{
                              width: 60,
                              aspectRatio: "1/1",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            className="rounded-3"
                          />
                        </td>
                        <td>{service.name}</td>
                        <td>{service.partner_id.name}</td>
                        <td>{service.category_id.name}</td>
                        <td>
                          <NumericFormat
                            value={service.price}
                            displayType="text"
                            prefix="Rp "
                            thousandSeparator={"."}
                            decimalSeparator=","
                          />
                        </td>
                        <td>{service.rating}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ReviewPage;
