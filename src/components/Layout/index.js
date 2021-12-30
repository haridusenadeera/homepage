import { Outlet, useLocation } from "react-router-dom";
import Navbar  from "../Navbar";

function Layout() {
    let location = useLocation();
    return (
      <div>
        <Navbar location={location}/>
        <Outlet />
      </div>
    );
  }
  
  export default Layout;
  