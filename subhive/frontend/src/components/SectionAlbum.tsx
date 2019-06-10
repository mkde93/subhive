import * as React from "react";
import AlbumHighlight from "./AlbumHighlight";
import Album from "../types/Album";
import DataFunctions from "../util/DataFunctions";

export interface Props {
}

export interface State {
  albums: Album[];
  newestAlbum: Album;
}

class SectionAlbum extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      albums: DataFunctions.getAlbums(),
      newestAlbum: this.findNewestAlbum(DataFunctions.getAlbums()),
    };
  }

  findNewestAlbum(allAlbums: Album[]): Album {
    allAlbums.sort(function (a, b) {
      const aReleasedate = DataFunctions.toDate(a.releasedate);
      const bReleasedate = DataFunctions.toDate(b.releasedate);
      return aReleasedate > bReleasedate ? -1 : aReleasedate < bReleasedate ? 1 : 0;
    })
    return allAlbums[0];
  }

  render() {
    return (
      <div>
        <section style={{ backgroundImage: `url(${require("../img/" + this.state.newestAlbum.bgimg)})` }} className="albumSection">
          <div className="container-16">
            <AlbumHighlight album={this.state.newestAlbum} />
          </div>
        </section>
      </div>
    );
  }
}
export default SectionAlbum;