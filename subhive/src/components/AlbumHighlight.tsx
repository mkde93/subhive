import * as React from "react";
import "../index.css";

export interface Props {
  albumTitle: string;
  albumType: string;
  albumArtists: string;
  albumTracks: string;
  albumCover: string;
  spotifyUrl: string;
  soundcloudUrl: string;
}

export interface State {
  tracks: string[];
}

class AlbumHighlight extends React.Component<Props, State> {
  componentWillMount() {
    this.fillTracks();
  }

  fillTracks() {
    this.setState({
      tracks: this.props.albumTracks.split(",")
    });
  }

  render() {
    return (
      <div>
        <div id="cover">
          <img src={require("../img/albumcovers/" + this.props.albumCover)} alt={this.props.albumTitle + " Cover"} />
        </div>
        <div id="info">
          <span>{this.props.albumType}</span>
          <h1>{this.props.albumTitle}</h1>
          <h3>By {this.props.albumArtists}</h3>
          <div id="buttons">
            <p>Play</p>
            <p>Stream</p>
          </div>
          <div id="tracks">
            <ul>
            {this.state.tracks !== null ?
              this.state.tracks.map((x, i) => (
                <li>{x}</li>
              )) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default AlbumHighlight;