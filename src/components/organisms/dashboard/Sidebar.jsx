import ActionButtonOutline from "@/components/atoms/ActionButtonOutline";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import {
  RiLogoutCircleLine,
  RiHome5Fill,
  RiApps2Fill,
  RiAccountCircleFill,
  RiShoppingCart2Fill,
  RiStarFill,
  RiMenuFill,
} from "react-icons/ri";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "@/styles/atoms/button.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaDatabase } from "react-icons/fa";
import { useAuth } from "@/context/authContext";

const Sidebar = ({ setIsCollapse, isCollapse }) => {
  const location = useLocation();
  const { logOut, decodedToken } = useAuth();

  const linkClass = (path, exact = false) => {
    const isActive = exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
    return `d-flex nav-link align-items-center gap-2 px-3 py-2 ${
      isCollapse ? "justify-content-center" : "px-3"
    } ${isCollapse ? "" : "w-100"} ${
      isActive ? "active px-3 rounded-2" : "text-secondary"
    }`;
  };

  const renderWithTooltip = (path, tooltipText, icon, label, exact = false) => {
    const link = (
      <Link
        to={path}
        className={linkClass(path, exact)}
        style={{ textDecoration: "none" }}
      >
        {icon}
        {!isCollapse && label}
      </Link>
    );

    if (isCollapse) {
      return (
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>{tooltipText}</Tooltip>}
        >
          <li className="nav-item">{link}</li>
        </OverlayTrigger>
      );
    } else {
      return <li className="nav-item">{link}</li>;
    }
  };

  return (
    <div className="d-flex flex-column p-3 h-100 bg-light position-relative">
      <TbLayoutSidebarLeftCollapse
        size={26}
        className="position-absolute end-0 top-0"
        style={{ cursor: "pointer", rotate: isCollapse && "180deg" }}
        onClick={() => setIsCollapse(!isCollapse)}
      />
      <Link
        to="/dashboard"
        className={`d-flex w-100 ${
          isCollapse ? "justify-content-center" : "align-items-center"
        } mb-3 mb-md-0 me-md-auto link-dark text-decoration-none`}
      >
        {isCollapse ? (
          <div className="w-100 text-center">
            <RiMenuFill size={24} />
          </div>
        ) : (
          <>
            <RiMenuFill size={24} className="me-2" />
            <span className="fs-4 fw-bold">Servease</span>
          </>
        )}
      </Link>

      <hr />
      <ul className="nav nav-pills d-flex flex-column gap-2 mb-auto">
        {renderWithTooltip(
          "/dashboard",
          "Dashboard",
          <RiHome5Fill size={24} />,
          "Dashboard",
          true
        )}
        {renderWithTooltip(
          "/profile",
          "Profile",
          <RiAccountCircleFill size={24} />,
          "Profile"
        )}
        {renderWithTooltip(
          "/dashboard/companys",
          "Company",
          <FaDatabase size={24} />,
          "Company"
        )}
        {renderWithTooltip(
          "/dashboard/services",
          "Services",
          <RiApps2Fill size={24} />,
          "Services"
        )}
        {renderWithTooltip(
          "/dashboard/bookings",
          "Bookings",
          <RiShoppingCart2Fill size={24} />,
          "Bookings"
        )}
        {renderWithTooltip(
          "/dashboard/reviews",
          "Reviews",
          <RiStarFill size={24} />,
          "Reviews"
        )}
        {decodedToken.role === "ADMIN" && (
          <>
            {renderWithTooltip(
              "/dashboard/payment-methods",
              "Payment Methods",
              <BsCreditCard2FrontFill size={24} />,
              "Payment Methods"
            )}
          </>
        )}
      </ul>

      <ActionButtonOutline
        text={!isCollapse && "Logout"}
        icon={isCollapse && <RiLogoutCircleLine size={24} />}
        className="w-100 text-center"
        onClick={logOut}
      />
    </div>
  );
};

export default Sidebar;
