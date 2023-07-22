import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
