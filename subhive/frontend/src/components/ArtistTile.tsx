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
            <div className="image-wrapper">
              <img src={this.props.artist.img} />
              <div className="gradient"></div>
            </div>
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
