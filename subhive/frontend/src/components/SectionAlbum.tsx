import * as React from "react";
import AlbumHighlight from "./AlbumHighlight";
import Album from "../types/Album";
import DataFunctions from "../util/DataFunctions";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";

export interface Props {
}

export interface State {
  albums: Album[];
  loading: Boolean;
}

class SectionAlbum extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      albums: [],
      loading: true,
    };
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/albums'
    })
      .then((response) => {
        this.setState({
          albums: DataFunctions.createAlbumObjects(response.data),
          loading: false,
        });
      });
  }

  findNewestAlbum(allAlbums: Album[]): Album {
    allAlbums.sort(function (a, b) {
      const aReleasedate = a.releasedate;
      const bReleasedate = b.releasedate;
      return aReleasedate > bReleasedate ? -1 : aReleasedate < bReleasedate ? 1 : 0;
    })
    return allAlbums[0];
  }

  render() {
    return (
      <div>
        <section style={{ backgroundImage: this.state.loading ? `url(${require("../img/Subhive_Origin_Dark.png")})`: `url(${this.findNewestAlbum(this.state.albums).bgimg})` }} className="albumSection">
          {this.state.loading ? <CircularProgress /> :
            <div className="container-16">
              <AlbumHighlight album={this.findNewestAlbum(this.state.albums)} />
            </div>}
        </section>
      </div>
    );
  }
}
export default SectionAlbum;