import HeroHeader from "@/components/common/HeroHeader";
import Navbar from "@/components/RootView/common/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="sticky top-0 z-50 mb-2">
        <HeroHeader />
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer would go here */}
    </div>
  );
};

export default RootLayout;