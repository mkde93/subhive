import * as React from "react";
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
      <div className="artist-highlight">
        <div className="poster">
          <img src={require("../img/lineupartists/" + this.props.artist.img)} alt={this.props.artist.img + " Cover"} />
        </div>
        <div>
          <div className="info">
            <div>
              <h1>{this.props.artist.name}</h1>
              <h3>{this.props.artist.location}</h3>
              <p>{this.props.artist.bio}</p>
            </div>
            <div className="socials">
              {this.props.artist.facebook !== "NONE" ? <a target="_blank" href={this.props.artist.facebook}><img className="facebook" src={require("../img/icons/facebook.svg")} /></a> : null}
              {this.props.artist.soundcloud !== "NONE" ? <a target="_blank" href={this.props.artist.soundcloud}><img className="soundcloud" src={require("../img/icons/soundcloud.svg")} /></a> : null}
              {this.props.artist.instagram !== "NONE" ? <a target="_blank" href={this.props.artist.instagram}><img className="instagram" src={require("../img/icons/instagram.svg")} /></a> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtistHighlight;