import * as React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="container-16">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}> {/* Removed decoration from link; Centered Text */}
              <img src={require("../img/SUBHIVE_LOGO_2.png")} alt="Subhive Logo" />
              <span>Subhive</span>
            </Link>
          </div>
          <div>
            <nav>
              <ul>
                <li><Button label="music" link="/music" /></li>
                <li><Button label="events" link="/events" /></li>
                <li><Button label="artists" link="/artists" /></li>
                {/*<li><Button label="contact" link="/contact" /></li>*/}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
