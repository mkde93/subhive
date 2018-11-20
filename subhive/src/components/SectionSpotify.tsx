import * as React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";

export interface Props {
  backgroundImage: string;
  spotifyUrl: string;
}

class SectionSpotify extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="spotifySection">
        <div className="width-90">
          <div className="desc">
            <div>
              <h1>Subhive Selects</h1>
              <h3>Spotify Playlist by SUBHIVE</h3>
            </div>
            <div className="buttons">
              <a href={this.props.spotifyUrl} target={"_blank"}>
                <div className="spotify"><img src={require("../img/icons/Spotify_Icon_White.png")} />Follow</div>
              </a>
            </div>
          </div>
          <div className="spotifyPlaylist">
            <SpotifyPlaylist
              spotifyUrl={this.props.spotifyUrl}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default SectionSpotify;