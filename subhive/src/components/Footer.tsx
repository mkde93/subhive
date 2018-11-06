import * as React from "react";
import "../index.css";



class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="socials">
          <div className="hexagon">
            <a href=""><img className="facebook" src={require("../img/icons/facebook.svg")} /></a>
          </div>
          <div className="hexagon">
            <a href=""><img className="soundcloud" src={require("../img/icons/soundcloud.svg")} /></a>
          </div>
          <div className="hexagon">
            <a href=""><img className="instagram" src={require("../img/icons/instagram.svg")} /></a>
          </div>
          <div className="hexagon">
            <a href=""><img className="youtube" src={require("../img/icons/youtube.svg")} /></a>
          </div>
          <div className="hexagon">
            <a href=""><img className="spotify" src={require("../img/icons/spotify.svg")} /></a>
          </div>
        </div>
        <span>2018 (c) SUBHIVE</span>
      </section>
    );
  }
}
export default Footer;