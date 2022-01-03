import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar  from "../Navbar";

function Layout() {
    let location = useLocation();
    return (
      <div>
        <Navbar location={location}/>
        <Outlet />
        <Footer />
      </div>
    );
  }
  
  export default Layout;
  