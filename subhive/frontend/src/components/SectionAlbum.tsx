import * as React from "react";
import AlbumHighlight from "./AlbumHighlight";
import Album from "../types/Album";
import DataFunctions from "../util/DataFunctions";
import axios from "axios";
import APIs from "../APIs";
import history from '../history'
import { CircularProgress } from "@material-ui/core";

export interface Props {
}

export interface State {
  newestAlbum: Album;
  loading: boolean;
}

class SectionAlbum extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newestAlbum: new Album("Album Not Found", "Album Not Found", "Event Not Found",
      "Event Not Found", new Date().toString(), "Event Not Found", "Event Not Found", [], []),
      loading: true,
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getReleasesApi()])
      .then(axios.spread((artists, releases) => {
        this.setState({
          newestAlbum: DataFunctions.createAlbumObjects(releases.data, DataFunctions.createArtistsObjects(artists.data))[0],
          loading: false,
        });
      }));
  }
  
  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getReleasesApi() {
    return axios.get(APIs.apis.releaseslist);
  }

  render() {
    return (
      <div>
        <section style={{ backgroundImage: `url(${this.state.newestAlbum.bgimg})` }} className="albumSection">
          <div className="container-16">
            {this.state.loading ? <CircularProgress/> : <AlbumHighlight album={this.state.newestAlbum} />}
          </div>
        </section>
      </div>
    );
  }
}
export default SectionAlbum;