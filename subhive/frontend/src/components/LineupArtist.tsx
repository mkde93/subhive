import * as React from "react";
import EventArtist from "../types/EventArtist";
import { Link } from "react-router-dom";

export interface Props {
  artist: EventArtist
}

class LineupArtist extends React.Component<Props> {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: `url(${this.props.artist.artist.img})` }} className="artist" >
          <div className="overlay">
            <span className="name">{this.props.artist.artist.name}</span>
            {this.props.artist.settime !== undefined && this.props.artist.settime !== "" ?
              <div className="time">
                <span className="settime">Set time:</span>
                <span className="timeslot">{this.props.artist.settime}</span>
              </div> : null}
            {this.props.artist.artist.subhiveartist ?
              <Link className="remove-decoration" to={"/artists/" + this.props.artist.artist.name.split(" ").join("")}>
                <span className="readmore">Read more</span>
              </Link> : null}
            {this.props.artist.artist.soundcloud !== "NONE" ?
              <a href={this.props.artist.artist.soundcloud} target={"_blank"}>
                <div className="social">Listen</div>
              </a> : null
            }
          </div>
          <div className="gradient" />
        </div>
      </div>
    );
  }
}

export default LineupArtist;
