import * as React from "react";
import LineupArtist from "./LineupArtist";
import Event from "../types/Event";

export interface Props {
  event: Event;
  hasEventOccured: boolean;
}


class EventHighlight extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="event-highlight">
        <div className="poster">
          <img src={this.props.event.poster} alt={this.props.event.title + " Cover"} />
        </div>
        <div>
          <div className="info">
            <span className="tag">{this.props.hasEventOccured ? "Upcoming event" : "Past event"}</span>
            <h1 style={{ color: this.props.event.titlecolor }}>{this.props.event.title}</h1>
            <h3 style={{ color: this.props.event.textcolor }}>{this.props.event.date} - {this.props.event.location}</h3>
            <div className="buttons">
              {this.props.event.aftermovie !== "false" ?
                <a href={this.props.event.aftermovie} target={"_blank"}>
                  <div className="video"><img src={require("../img/icons/play_white.svg")} />Watch video</div>
                </a> : null
              }
              <a href={this.props.event.eventlink} target={"_blank"}>
                <div className="eventlink"><img src={require("../img/icons/facebook-white.svg")} />{this.props.hasEventOccured ? 'Attend event' : 'Check out event'}</div>
              </a>
            </div>
            <div className="description">
              <p style={{ color: this.props.event.textcolor }}>{this.props.event.desc}</p>
            </div>
            <div className="lineup">
              <h3 style={{ color: this.props.event.titlecolor }}>Lineup</h3>
              <div className="wrapper">
                {this.props.event.artists.map((x, i) => (
                  <LineupArtist
                    artist={x}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventHighlight;