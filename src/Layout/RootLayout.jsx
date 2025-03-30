import HeroHeader from "@/components/common/HeroHeader";
import Footer from "@/components/RootView/common/Footer";
import Navbar from "@/components/RootView/common/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
        <HeroHeader />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default RootLayout;