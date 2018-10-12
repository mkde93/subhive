import * as React from "react";
import "../index.css";

export interface Props {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventPoster: string;
  eventLink: string;
  eventMovie: string;
  eventDescription: string;
}

class AlbumHighlight extends React.Component<Props> {
  render() {
    return (
      <div className="event">
        <div className="poster">
          <img src={require("../img/eventposters/" + this.props.eventPoster)} alt={this.props.eventTitle + " Cover"} />
        </div>
        <div className="info">
          <span>Upcoming Event</span>
          <h1>{this.props.eventTitle}</h1>
          <h3>{this.props.eventDate} - {this.props.eventLocation}</h3>
          <div className="buttons">
            <div className="video"><img src={require("../img/icons/play.svg")} />Watch video</div>
            <div className="eventlink"><img src={require("../img/icons/Spotify_Icon_White.png")} />Attend event</div>
          </div>
          <div className="description">
            <p>{this.props.eventDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default AlbumHighlight;