import * as React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export interface Props {
}

export interface State {
  burgerActive: boolean;
}

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      burgerActive: false,
    };

  }
  toggleMenu = () => {
    const currentState = this.state.burgerActive;
    this.setState({
      burgerActive: !currentState,
    });
  }
  
  render() {
    const burgerClass = this.state.burgerActive ? ' open' : '';
    return (
      <header>
        <div className="menu-container container-16">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}> {/* Removed decoration from link; Centered Text */}
              <img src={require("../img/SUBHIVE_LOGO_2.png")} alt="Subhive Logo" />
              <span>Subhive</span>
            </Link>
          </div>
          <div>
            <nav className="desktop-nav">
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
            <div className={"burger" + burgerClass} onClick={this.toggleMenu}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
          </div>
        </div>

        <nav className={"mobile-nav" + burgerClass} id="mobile-nav">
          <div className="mobile-container">
            <ul>
              <li onClick={this.toggleMenu}><Button label="music" link="/music" /></li>
              <li onClick={this.toggleMenu}><Button label="events" link="/events" /></li>
              <li onClick={this.toggleMenu}><Button label="artists" link="/artists" /></li>
              {/*<li><Button label="contact" link="/contact" /></li>*/}
            </ul>
            <a target="_blank" href="https://open.spotify.com/user/m4b4uyyjsqiayu25y7ud0zbqy/playlist/3ZODyGLF5RCS5S6WLlQoqr?si=64V7uF5oS1icIuxsMM_HSA" className="menu-spotify">
              <img src={require("../img/icons/play_white.svg")} />
              <span>Spotify Playlist</span>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Menu;
