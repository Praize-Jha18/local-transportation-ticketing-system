import Footer from "./footer";
import LiTag from "./li.tag";
import { Outlet } from "react-router-dom";


function Navbar() {
  return(
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light "style={{backgroundColor:'#0B12AF'}}>
      <div className="container" >
        <a className="navbar-brand" href="/home" style={{color:'white'}}>Rapid Transit</a>
        <button className="navbar-toggler" style={{color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
        <a className="nav-link active" style={{color:'white'}} aria-current="page" href="/home">Home</a>
        </li>
        <LiTag label={"Profile"} destination={"/profile"} />
        <LiTag label={"Services"} destination={"/services"} />
        <LiTag label={"Login"} destination={"/login"} />
        <LiTag label={"Sign Up"} destination={"/sign-up"} />
        {/* Log in/out component */}
        </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    <Footer/>
    </>
  );
}

export default Navbar