import * as React from "react";
import { Link } from "react-router-dom";
import Album from "../types/Album";
import Artist from "../types/Artist";

export interface Props {
  album: Album
}

class AlbumTile extends React.Component<Props> {
  render() {
    return (
      <div className="event-grid">
        <Link className="remove-decoration" to={"/music/" + this.props.album.title.replace(/[\W_]+/g,"")}>
          <div>
            <div className="image-wrapper">
              <img src={this.props.album.cover} />
            </div>
            <div className="event">
              <p className="title">{this.props.album.title}</p>
              <div>
                <p className="date">{(this.props.album.type === "Single" || this.props.album.type === "EP") ? this.props.album.artists.map(a => a.name).join(", ") : "Various Artists"}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AlbumTile;
