import React from "react";
import "../assets/css/earth.scss";
import Typed from "react-typed";
import Logo from "../assets/images/logo-uvg.png";
import { Link } from "react-router-dom";

class Instroduction extends React.Component {

  render() {
    return(
      <>
        <div id="nav-earth">
          <nav className="navbar">
            <Link to="/board">
              <a className="navbar-brand"><img id="logo" src={Logo} height="35" /></a>
            </Link>
          </nav>
        </div>
        <div className="scenes">
          <div className="welcome-body">
            <Typed
              className="typed-text"
              strings={["Bienvenido", "3", "2", "1"]}
              typeSpeed={40}
              backSpeed={60}
              loop />
          </div>
          <div className="page-title">Edman Cota</div>
          <div className="planet planet-earth">
            <div className="loader"><span></span></div>
            <div className="earth" id="earth"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Instroduction;