import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionAlbum from "../components/SectionAlbum";
import Album from "../types/Album";
import AlbumTile from "../components/AlbumTile";
import DataFunctions from "../util/DataFunctions";
import axios from "axios";
import APIs from "../APIs";
import history from '../history'

export interface Props {
}

export interface State {
  albums: Album[];
}

class Music extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  
  componentWillMount() {
    axios.all([this.getArtistApi(), this.getReleasesApi()])
      .then(axios.spread((artists, releases) => {
        const allReleases = DataFunctions.createAlbumObjects(releases.data, DataFunctions.createArtistsObjects(artists.data));
        allReleases.shift();
        this.setState({
          albums: allReleases,
        });
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
  }

  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getReleasesApi() {
    return axios.get(APIs.apis.releaseslist);
  }

  render() {
    return (
      <div className="page-bg">
        <SectionAlbum />
        <div className="container-16">
          <h2>Other releases</h2>
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