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
          <span>{this.props.artist}</span>
        </div>
      </div>
    );
  }
}

export default LineupArtist;
