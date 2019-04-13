import * as React from "react";
import { Link } from "react-router-dom";
import Album from "../types/Album";

export interface Props {
  album: Album
}

class AlbumTile extends React.Component<Props> {

  render() {
    return (
      <div className="event-grid">
        <Link className="remove-decoration" to={"/events/"}>
          <div>
            <img src={require("../img/albumcovers/" + this.props.album.cover)} />
            <div className="event">
              <p className="title">{this.props.album.title}</p>
              <div>
                <p className="date">{this.props.album.releasedate}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AlbumTile;
