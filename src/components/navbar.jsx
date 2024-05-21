import LiTag from "./li.tag";
import { Outlet } from "react-router-dom";


function Navbar() {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.jsp">Rapid Transit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="index.jsp">Home</a>
        </li>
        <LiTag label={"Profile"} destination={"/profile"} />
        <LiTag label={"Services"} destination={"/services"} />
        <LiTag label={"Login"} destination={"/login"} />
        {/* Log in/out component */}
        </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Navbar