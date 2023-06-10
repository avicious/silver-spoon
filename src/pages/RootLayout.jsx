import { Outlet } from "react-router-dom";
import Header from "../components/Root/Header";
import Form from "../components/Root/Form";
import Footer from "../components/Root/Footer";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Form />
    <Footer />
  </>
);
export default RootLayout;
