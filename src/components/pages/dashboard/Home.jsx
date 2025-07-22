import BackButton from "@/components/molecules/dashboard/BackButton";
import CardOverview from "@/components/molecules/dashboard/CardOverview";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import { RiEqualizerLine } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      <BackButton text={"Dashboard"} />
      <Row className="mt-5 gap-lg-0 gap-4">
        <Col lg={4}>
          <CardOverview text={"Total Orders"} value="10" />
        </Col>
        <Col lg={4}>
          <CardOverview text={"Total Services"} value="4" />
        </Col>
        <Col lg={4}>
          <CardOverview text={"Total Revenue"} value="Rp 5.000.000" />
        </Col>
      </Row>
      {/* most popular services */}
      <div className="mt-5">
        <Card border="0" className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Most Popular Services</h5>
              <div className="d-flex align-items-center gap-3">
                <Form.Control
                  type="search"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="search here...."
                />
                <Card className="px-3 py-2">
                  <div>
                    <RiEqualizerLine />
                  </div>
                </Card>
              </div>
            </div>
            <Table className="mt-3">
              <thead>
                <tr className="rounded-2">
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Total Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
