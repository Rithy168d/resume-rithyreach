import { Outlet } from "react-router-dom";
import PortfolioLink from "../components/PortfolioLink";

const RootLayout = () => {
  return (
    <>
      <PortfolioLink />
      <Outlet />
    </>
  );
};

export default RootLayout;
