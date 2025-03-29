import DashboardHeader from "@/components/DashboardView/common/DashboardHeader";
import DashboardSidebar from "@/components/DashboardView/common/DashboardSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative pt-[70px] h-screen scroll-smooth">
      <DashboardHeader
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />

Hello senders
      <div className="flex items-start">
        <DashboardSidebar
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />

        <section className="main-content w-full overflow-auto p-6 ">
          <Outlet />
          
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;