import * as React from "react";
import ContentStrings from "../ContentStrings";
import LineupArtist from "./LineupArtist";
import Event from "../types/Event";
import Artist from "../types/Artist";

export interface Props {
  artist: Artist;
}

export interface State {
}


class ArtistHighlight extends React.Component<Props, State> {
  render() {
    return (
      //TODO: Franz style this pls and stuff
      <div className="event-highlight">
        <div className="poster">
          <img src={require("../img/lineupartists/" + this.props.artist.img)} alt={this.props.artist.img + " Cover"} />
        </div>
        <div>
          <div className="info">
            <h1>{this.props.artist.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtistHighlight;