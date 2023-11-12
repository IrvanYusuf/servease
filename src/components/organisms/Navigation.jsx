import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import * as icon from "react-bootstrap-icons"
import "../../styles/molecules/navigation.css"

const Navigation = () => {
    const location=useLocation()
   
    return (
        <>
         <Nav variant="pills" defaultActiveKey={location.pathname} className="flex-column">
            <Nav.Item>
              <Nav.Link href="/profile"><icon.PersonCircle size={"20"} className="icon"/> Biodata Diri</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile/riwayat-pemesanan"><icon.ClockHistory size={"20"} className="icon"/>Riwayat Pemesanan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile/daftar-alamat"><icon.GeoAlt size={"20"} className="icon"/>Daftar Alamat</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login"><icon.BoxArrowDownLeft size={"20"} className="icon"/>Logout</Nav.Link>
            </Nav.Item>
          </Nav>  
        </>
    )
}

export default Navigation;