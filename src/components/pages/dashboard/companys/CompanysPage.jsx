import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import BackButton from "@/components/molecules/dashboard/BackButton";
import SkeletonTable from "@/components/organisms/dashboard/SkeletonTable";
import PartnersServices from "@/services/partner.service";
import { useQuery } from "@tanstack/react-query";
import { Card, Form, Placeholder, Table } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CompanysPage = () => {
  // get all partners
  const { data: dataPartners, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: PartnersServices.getAllPartners,
  });
  return (
    <div>
      <BackButton text={"Company"} />
      <div className="mt-5">
        <Card border="0" className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-end">
              {dataPartners?.data?.length < 3 && (
                <Link
                  to={"/dashboard/companys/new"}
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
              <h5>All Your Companys</h5>
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
                  <th>Name</th>
                  <th>Province</th>
                  <th>City</th>
                  <th>District</th>
                  <th>Link Map</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <SkeletonTable length={5} />
                ) : (
                  <>
                    {dataPartners.data.map((partner, index) => (
                      <tr key={partner._id}>
                        <td>{index + 1}</td>
                        <td>{partner.name}</td>
                        <td>{partner.province}</td>
                        <td>{partner.city}</td>
                        <td>{partner.district}</td>
                        <td>
                          <Link to={partner.link_map}>{partner.link_map}</Link>
                        </td>
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

export default CompanysPage;
