import * as React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export interface Props {
}

export interface State {
  burgerActive: boolean;
  titleText: string;
}

const puns = [
  'CLUBHIVE',
  'SUBVIBE',
  'SUBSCRIBE',
  'SUBHIGHFIVE',
  'SUBLIFE'
];

let TimeoutReset: NodeJS.Timeout;

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      burgerActive: false,
      titleText: 'SUBHIVE',
    };

  }
  toggleMenu = () => {
    const currentState = this.state.burgerActive;
    this.setState({
      burgerActive: !currentState,
    });
  }

  shuffleLogoText = () => {
    let currentPunRemoved = [...puns];
    currentPunRemoved = currentPunRemoved.filter(s => s !== this.state.titleText);
    const index = Math.floor(Math.random() * currentPunRemoved.length);
    let newText = currentPunRemoved[index];
    let scrambled = newText;
    this.setNewTitle(newText, scrambled, 1, false);
  }

  setCleanTitle = (cleanTitle: string, backToOriginal: boolean) => {
    if (backToOriginal) {
      this.setState({
        titleText: cleanTitle,
      });
    } else {
      this.setState({
        titleText: cleanTitle,
      }, () => {
        clearTimeout(TimeoutReset);
        TimeoutReset = setTimeout(() => {
          this.setNewTitle('SUBHIVE', 'SUBHIVE', 1, true);
        }, 3000)
      });
    }
  }

  setNewTitle = (cleanTitle: string, scrambledTitle: string, time: number, backToOriginal: boolean) => {
    const scrambledTitleAgain = scrambledTitle.split('').sort(function () { return 0.5 - Math.random() }).join('');
    this.setState({
      titleText: scrambledTitleAgain,
    }, () => {
      if (time < 5) {
        setTimeout(() => {
          this.setNewTitle(cleanTitle, scrambledTitleAgain, ++time, backToOriginal)
        }, 50)
      } else {
        this.setCleanTitle(cleanTitle, backToOriginal)
      };
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
              <span
                onMouseOver={this.shuffleLogoText}
              >{this.state.titleText}</span>
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
