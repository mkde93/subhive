import * as React from "react";

export interface Props {
  movieTitle: string;
  movieUrl: string;
  backgroundImage: string;
  posterUrl: string;
}

class SectionAftermovie extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/movieposters/" + this.props.backgroundImage)})` }} className="movieSection">
        <div>
          <h1>Latest aftermovie</h1>
          <h3>{this.props.movieTitle}</h3>
          <div className="video">
            <video width="100%" poster={require("../img/movieposters/" + this.props.posterUrl)} controls={true} autoPlay={true} muted={true} loop={true}>
              <source src={require("../video/" + this.props.movieUrl)} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionAftermovie;