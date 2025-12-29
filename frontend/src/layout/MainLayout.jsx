import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

const MainLayout = () => {
  return (
    <div className="w-full ">
      <Header />
      <main className="container mx-auto max-w-6xl min-h-screen px-4 pt-10">
        <Outlet />
      </main>
      <Footer />
      <NavMobile />
    </div>
  );
};

export default MainLayout;
