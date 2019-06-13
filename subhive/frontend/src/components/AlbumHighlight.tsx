import * as React from "react";
import Album from "../types/Album";

export interface Props {
  album: Album;
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
          <img src={this.props.album.cover} alt={this.props.album.title + " Cover"} />
        </div>
        <div className="info">
          <span>{this.props.album.type}</span>
          <h1>{this.props.album.title}</h1>
          <h3>By {this.writeArtists()}</h3>
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
                    <a href={this.props.album.soundcloudtracklinks[i]} target={"_blank"}>
                      <div className="soundcloudtracklink">{x}</div>
                    </a>
                  </li>
                )) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AlbumHighlight;