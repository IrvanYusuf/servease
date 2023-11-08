import "../../styles/molecules/ServiceCard.css"
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container, Pagination, Stack, Typography, styled } from "@mui/material";
import data from '../../data/DaftarAc'; 
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ServiceCard() {
    const [page, setPage] = useState(1);

    const handlePage = (event, value) => {
        setPage(value);
    }
    return (
        <Container>
            <h3>DAFTAR SERVICE AC</h3>
            <Row xs={2} md={3}>
                {data.map((item) => (
                    <Col>
                        <Card className="card">
                            <Card.Img variant="top" src={item.gambar_service ?? "not-available.jpg"} alt="daftarservice" id="gambar"/>
                            <Card.Body id="Body">
                                <div className="profile-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="1 0 3 20">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    <h5> {item.nama_kang_service} </h5>
                                </div>
                                <Card.Text>
                                    <p className="title">{item.title_service}</p>
                                    <div className="Jarak">
                                        <LocationOnIcon/>
                                        <p>{item.jarak}</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Stack className="pagination">
                <Typography>
                    Page: {page}
                </Typography>
                <Pagination count={5} page={page} onChange={handlePage}/>
            </Stack>
        </Container>
    )
}

export default ServiceCard