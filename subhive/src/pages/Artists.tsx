import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionEvent from "../components/SectionEvent";
import DataFunctions from "../util/DataFunctions";
import Footer from "../components/Footer";
import Artist from "../types/Artist";
import ArtistTile from "../components/ArtistTile";

export interface Props {
}

export interface State {
  artists: Artist[];
}

class Artists extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      artists: DataFunctions.getArtists(),
    };
  }
  render() {
    return (
      //TODO: Franz style and stuff, maybe add background
      <div className="page-bg">
        <div className="container-16">
            <div className="grid padding-top">
              {this.state.artists.map((x, i) => (
                x.subhiveartist ?
                  <ArtistTile
                    key={i}
                    artist={x}
                  /> : null
              ))}
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Artists;