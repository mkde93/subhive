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
              <a target="_blank" href="https://open.spotify.com/user/m4b4uyyjsqiayu25y7ud0zbqy/playlist/3ZODyGLF5RCS5S6WLlQoqr?si=64V7uF5oS1icIuxsMM_HSA" className="menu-spotify">
                <img src={require("../img/icons/play_white.svg")} />
                <span>Spotify Playlist</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
