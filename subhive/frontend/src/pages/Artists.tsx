import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import DataFunctions from "../util/DataFunctions";
import Artist from "../types/Artist";
import ArtistTile from "../components/ArtistTile";
import axios from "axios";
import APIs from "../APIs";
import history from '../history'

export interface Props {
}

export interface State {
  artists: Artist[];
}

class Artists extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: APIs.apis.artistlist,
    })
      .then((response) => {
        this.setState({
          artists: DataFunctions.createArtistsObjects(response.data),
        });
      })
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
  }

  render() {
    return (
      <div className="page-bg">
        <div className="container-16 padding-top artist-display">
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
        </div>
      </div>
    );
  }
}

export default Artists;