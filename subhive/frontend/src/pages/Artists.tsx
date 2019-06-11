import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import DataFunctions from "../util/DataFunctions";
import Artist from "../types/Artist";
import ArtistTile from "../components/ArtistTile";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export interface Props {
}

export interface State {
  artists: Artist[];
  loading: boolean;
}

class Artists extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      artists: [],
      loading: true,
    };
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/artists'
    })
      .then((response) => {
        this.setState({
          artists: DataFunctions.createArtistsData(response.data),
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="page-bg">
        <div className="container-16 padding-top artist-display">
          {this.state.loading ? <CircularProgress /> :
            <div>
              <h2>Artists</h2>
              <h3>The SUBHIVE roster</h3>
              <div className="grid">
                {this.state.artists.map((x, i) => (
                  x.subhiveartist ?
                    <ArtistTile
                      key={i}
                      artist={x}
                    /> : null
                ))}
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default Artists;