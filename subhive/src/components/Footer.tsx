import * as React from "react";



class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="socials">
          <div className="hexagon">
            <a target="_blank" href="https://www.facebook.com/SUBHIVE/"><img className="facebook" src={require("../img/icons/facebook.svg")} /></a>
          </div>
          <div className="hexagon">
            <a target="_blank" href="https://soundcloud.com/subhive"><img className="soundcloud" src={require("../img/icons/soundcloud.svg")} /></a>
          </div>
          <div className="hexagon">
            <a target="_blank" href="https://www.instagram.com/subhive_dk/"><img className="instagram" src={require("../img/icons/instagram.svg")} /></a>
          </div>
          <div className="hexagon">
            <a target="_blank" href="https://www.youtube.com/channel/UC2nLL0EyGyrzbP7RfTYVORA"><img className="youtube" src={require("../img/icons/youtube.svg")} /></a>
          </div>
          <div className="hexagon">
            <a target="_blank" href="https://open.spotify.com/user/m4b4uyyjsqiayu25y7ud0zbqy/playlist/3ZODyGLF5RCS5S6WLlQoqr?si=xOHy7f2rR3usC5ne_gRhTg">
              <img className="spotify" src={require("../img/icons/spotify.svg")} />
            </a>
          </div>
        </div>
        <span>2018 (c) SUBHIVE</span>
      </section>
    );
  }
}
export default Footer;