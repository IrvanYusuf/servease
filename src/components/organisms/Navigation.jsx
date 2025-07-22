import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "@/styles/organisms/navigation.css";
import { VscAccount } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { useAuth } from "@/context/authContext";

const Navigation = () => {
  const { logOut } = useAuth();

  return (
    <>
      <Nav variant="pills" className="flex-column row-gap-2">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/"
            className={({ isActive }) => (isActive ? "active3" : "none")}
          >
            <VscAccount size={24} />
            Biodata Diri
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/riwayat-pemesanan"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <BsClockHistory size={24} />
            Riwayat Pemesanan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/daftar-alamat"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <FiMapPin size={24} />
            Daftar Alamat
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile/ulasan"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            <FaRegStar size={24} />
            Ulasan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={"button"} onClick={logOut}>
            <MdLogout size={24} style={{ rotate: "180deg" }} />
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
