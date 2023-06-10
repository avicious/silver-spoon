import { Outlet } from "react-router-dom";
import Header from "../components/header";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export default RootLayout;
