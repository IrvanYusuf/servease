import Sidebar from "@/components/organisms/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const LayoutDashboard = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div
        style={{
          width: isCollapse ? "80px" : "280px",
          transition: "width 0.3s",
          backgroundColor: "#f5f5f5",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
        className="d-none d-lg-block"
      >
        <Sidebar setIsCollapse={setIsCollapse} isCollapse={isCollapse} />
      </div>

      <div
        style={{
          flex: 1,
          height: "100vh",
          overflowY: "auto",
        }}
        className="p-4"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;
