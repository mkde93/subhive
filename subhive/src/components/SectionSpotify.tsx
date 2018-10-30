import * as React from "react";
import "../index.css";
import SpotifyPlaylist from "./SpotifyPlaylist";

export interface Props {
  backgroundImage: string;
  spotifyUrl: string;
}

class SectionSpotify extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="spotifySection">
        <div>
          <h1>Subhive Selects</h1>
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