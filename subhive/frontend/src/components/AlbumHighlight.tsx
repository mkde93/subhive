import * as React from "react";
import Album from "../types/Album";
import { Link } from "react-router-dom";

export interface Props {
  album: Album;
  inFocus: boolean;
}

class AlbumHighlight extends React.Component<Props> {
  writeArtists(): string {
    if (this.props.album.artists.length > 3) {
      return "Various Artists";
    } else {
      return this.props.album.artists.map(a => a.name).join(", ")
    }
  }

  render() {
    return (
      <div className="album">
        <div className="cover">
          {!this.props.inFocus ?
            <Link className="remove-decoration" to={"/music/" + this.props.album.title.replace(/[\W_]+/g, "")}>
              <img src={this.props.album.cover} alt={this.props.album.title + " Cover"} style={{ borderImageSource: `linear-gradient(60deg, ${this.props.album.gradient_bl} , ${this.props.album.gradient_tr})` }} />
            </Link>
            :
            <img src={this.props.album.cover} alt={this.props.album.title + " Cover"} style={{ borderImageSource: `linear-gradient(60deg, ${this.props.album.gradient_bl} , ${this.props.album.gradient_tr})` }} />
          }
        </div>
        <div className="info">
          <span>{this.props.album.type}</span>
          {!this.props.inFocus ?
            <Link className="remove-decoration" to={"/music/" + this.props.album.title.replace(/[\W_]+/g, "")}>
              <h1>{this.props.album.title}</h1>
            </Link>
            :
            <h1>{this.props.album.title}</h1>
          }
          <div className="artists">
            <h3>By</h3>
            {
              this.props.album.artists.map((a, i) => (
                <Link className="a" to={"/artists/" + a.name.split(" ").join("")}>
                  {this.props.album.artists.length === i + 1 ? <h3>{a.name}</h3> : <h3>{a.name + ", "}</h3>}
                </Link>
              ))
            }
          </div>
          <div className="buttons">
            <a href={this.props.album.soundcloudurl} target={"_blank"}>
              <div className="soundcloud"><img src={require("../img/icons/play_white.svg")} />Soundcloud</div>
            </a>
            <a href={this.props.album.spotifyurl} target={"_blank"}>
              <div className="spotify"><img src={require("../img/icons/Spotify_Icon_White.png")} />Spotify</div>
            </a>
          </div>
          <div className="tracks">
            <ul>
              {this.props.album.tracks !== null ?
                this.props.album.tracks.map((x, i) => (
                  <li>
                    <img src={require("../img/icons/play_white.svg")} />
                    <a href={this.props.album.soundcloudtracklinks[i]} target={"_blank"}>
                      <div className="soundcloudtracklink">{x}</div>
                    </a>
                  </li>
                )) : null}
            </ul>
          </div>
        </div>
      </div >
    );
  }
}
export default AlbumHighlight;