import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Navigation = () => {
    const location=useLocation()
   
    return (
        <>
         <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
            <Nav.Item>
              <Nav.Link href="/profile">Biodata Diri</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile/riwayat-pemesanan">Riwayat Pemesanan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile/daftar-alamat">Daftar Alamat</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Logout</Nav.Link>
            </Nav.Item>
          </Nav>  
        </>
    )
}

export default Navigation;