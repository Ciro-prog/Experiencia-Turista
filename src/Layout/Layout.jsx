import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {


  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
