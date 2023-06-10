import { Outlet } from "react-router-dom";
import Header from "../components/Root/Header";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export default RootLayout;
