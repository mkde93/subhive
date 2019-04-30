import * as React from "react";
import { Link } from "react-router-dom";
import Artist from "../types/Artist";

export interface Props {
  artist: Artist
}

class ArtistTile extends React.Component<Props> {

  render() {
    return (
      //TODO: Franz maybe style this i dunno
      <div className="artist-grid">
        <Link className="remove-decoration" to={"/artists/" + this.props.artist.name.split(" ").join("")}>
          <div>
            <img src={require("../img/lineupartists/" + this.props.artist.img)} />
            <div className="description">
              <p className="title">{this.props.artist.name}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistTile;
