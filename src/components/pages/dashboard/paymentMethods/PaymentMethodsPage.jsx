import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import BackButton from "@/components/molecules/dashboard/BackButton";
import SkeletonTable from "@/components/organisms/dashboard/SkeletonTable";
import PaymentMethodsServices from "@/services/paymentMethod.service";
import { useQuery } from "@tanstack/react-query";
import { Card, Form, Table } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PaymentMethodsPage = () => {
  const { data: dataPaymentMethods, isLoading } = useQuery({
    queryKey: ["payment-methods"],
    queryFn: PaymentMethodsServices.getAllPaymentMethods,
  });
  return (
    <div>
      <BackButton text={"Payment Method"} />
      <div className="mt-5">
        <Card border="0" className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-end">
              <Link
                to={"/dashboard/payment-methods/new"}
                style={{ textDecoration: "none" }}
              >
                <ActionButtonOutline
                  text="Add New"
                  icon={<IoAddOutline size={24} />}
                />
              </Link>
            </div>
            <div className="d-flex justify-content-between mt-4 align-items-center">
              <h5>All Payment Methods</h5>
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
                  <th>Type</th>
                  <th>Bank Name</th>
                  <th>Account Holder</th>
                  <th>Account Number</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <SkeletonTable />
                ) : dataPaymentMethods.data.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center">
                      No data service
                    </td>
                  </tr>
                ) : (
                  <>
                    {dataPaymentMethods?.data?.map((payment, index) => (
                      <tr key={payment._id}>
                        <td>{index + 1}</td>
                        <td>{payment.name}</td>
                        <td>{payment.type}</td>
                        <td>{payment.bank_name ?? "-"}</td>
                        <td>{payment.account_holder ?? "-"}</td>
                        <td>{payment.account_number ?? "-"}</td>
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

export default PaymentMethodsPage;
