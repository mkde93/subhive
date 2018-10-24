import * as React from "react";
import "../index.css";

export interface Props {
  movieTitle: string;
  movieUrl: string;
  backgroundImage: string;
  posterUrl: string;
}

class LatestAftermovie extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/movieposters/" + this.props.backgroundImage)})` }} className="movieSection">
        <div>
          <h1>Latest aftermovie</h1>
          <h3>{this.props.movieTitle}</h3>
          <div className="video">
            <video width="100%" poster={require("../img/movieposters/" + this.props.posterUrl)}>
              <source src={require("../video/" + this.props.movieUrl)} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    );
  }
}
export default LatestAftermovie;