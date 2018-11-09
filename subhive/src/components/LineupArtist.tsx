import * as React from "react";
import "../index.css";

export interface Props {
  artist: string;
  settime: string;
  social: string;
  artistimg: string;
}

class LineupArtist extends React.Component<Props> {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${require("../img/lineupartists/" + this.props.artistimg)})` }} className="artist" >
          <div className="overlay">
            <span className="name">{this.props.artist}</span>
            <div className="time">
              <span className="settime">Set time:</span>
              <span className="timeslot">{this.props.settime}</span>
            </div>
            <a href={this.props.social} target={"_blank"}>
              <div className="social">Listen</div>
            </a>
          </div>
          <div className="gradient" />
        </div>
      </div>
    );
  }
}

export default LineupArtist;
