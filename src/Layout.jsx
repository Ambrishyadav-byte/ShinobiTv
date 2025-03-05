import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 ">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
