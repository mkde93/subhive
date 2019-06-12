import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import DataFunctions from "../util/DataFunctions";
import { Link } from "react-router-dom";
import Album from "../types/Album";
import AlbumHighlight from "../components/AlbumHighlight";
import AlbumTile from "../components/AlbumTile";
import history from '../history'
import axios from "axios";
import APIs from "../APIs";

export interface Props {
}

export interface State {
  album: Album;
  otherAlbums: Album[];
}

class MusicDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      album: new Album("Album Not Found", "Album Not Found", "Event Not Found",
        "Event Not Found", new Date().toString(), "Event Not Found", "Event Not Found", [], []),
      otherAlbums: [],
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getReleasesApi()])
      .then(axios.spread((artists, releases) => {
        const allReleases = DataFunctions.createAlbumObjects(releases.data, DataFunctions.createArtistsObjects(artists.data));
        this.setState({
          album: this.getAlbumFromUrl(allReleases),
          otherAlbums: this.filterOutCurrentAlbum(allReleases),
        });
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
  }

  componentDidUpdate() {
    const key = this.state.album.title.replace(/\s/g, "");
    if (key != window.location.pathname.split("/")[2]) {
      axios.all([this.getArtistApi(), this.getReleasesApi()])
      .then(axios.spread((artists, releases) => {
        const allReleases = DataFunctions.createAlbumObjects(releases.data, DataFunctions.createArtistsObjects(artists.data));
        this.setState({
          album: this.getAlbumFromUrl(allReleases),
          otherAlbums: this.filterOutCurrentAlbum(allReleases),
        });
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
    }
  }

  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getReleasesApi() {
    return axios.get(APIs.apis.releaseslist);
  }

  getAlbumFromUrl(data: Album[]): Album {
    const searchKey = window.location.pathname.split("/")[2];
    let foundAlbum: Album = new Album("Album Not Found", "Album Not Found", "Event Not Found",
      "Event Not Found", new Date().toString(), "Event Not Found", "Event Not Found", [], []);
    data.forEach(a => {
      const key = a.title.replace(/\s/g, "");
      if (key === searchKey) {
        foundAlbum = a;
      }
    })
    return foundAlbum;
  }

  filterOutCurrentAlbum(data: Album[]): Album[] {
    const currentAlbum: Album = this.getAlbumFromUrl(data);
    const otherAlbums = data.filter(e => e.title !== currentAlbum.title);
    return otherAlbums;
  }

  render() {
    return (
      <div className="page-bg">
        <section style={{ backgroundImage: `url(${this.state.album.bgimg})` }} className="eventSection">
          <div className="container-16">
            <AlbumHighlight
              album={this.state.album}
            />
          </div>
        </section>
        <section>
          <div className="container-16">
            {this.state.otherAlbums.length !== 0 ?
              <div>
                <h2>Other Releases</h2>
                <div className="grid">
                  {this.state.otherAlbums.map((x, i) => (
                    <Link className="remove-decoration" to={"/music/" + x.title.replace(/\s/g, "")}>
                      <AlbumTile
                        key={i}
                        album={x}
                      />
                    </Link>
                  ))}
                </div>
              </div> : null}
          </div>
        </section>
      </div>
    );
  }
}

export default MusicDetails;