import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

const MainLayout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full">
      <Header />
      <main className="flex-1 container mx-auto max-w-6xl px-4 pt-10 pb-24 lg:pb-10">
        <Outlet />
      </main>
      <Footer />
      <NavMobile />
    </div>
  );
};

export default MainLayout;

