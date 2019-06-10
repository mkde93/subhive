import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionAlbum from "../components/SectionAlbum";
import Album from "../types/Album";
import AlbumTile from "../components/AlbumTile";
import DataFunctions from "../util/DataFunctions";

export interface Props {
}

export interface State {
  albums: Album[];
}

class Music extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      albums: DataFunctions.getAlbumsExceptNewest(),
    };
  }
  render() {
    return (
      <div className="page-bg">
        <SectionAlbum />
        <div className="container-16">
          <h2>Releases</h2>
          <div className="grid">
            {this.state.albums.map((x, i) => (
              <AlbumTile album={x} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Music;