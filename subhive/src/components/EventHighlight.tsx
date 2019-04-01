import * as React from "react";
import ContentStrings from "../ContentStrings";
import LineupArtist from "./LineupArtist";
import Event from "../types/Event";

export interface Props {
  event: Event;
}

export interface State {
  hasEventOccured: boolean;
}



class EventHighlight extends React.Component<Props, State> {
  componentWillMount() {
    this.hasEventBeenHeld();
  }

  hasEventBeenHeld() {
    console.log(this.props.event);
    let eventDate: Date = new Date();
    let currentDate: Date = new Date();
    eventDate.setDate(Number(this.props.event.date.split(".")[0]));
    eventDate.setMonth(Number(this.props.event.date.split(".")[1]) - 1);
    eventDate.setFullYear(Number(this.props.event.date.split(".")[2]));

    if (eventDate < currentDate) {
      this.setState({
        hasEventOccured: false
      });
    } else {
      this.setState({
        hasEventOccured: true
      });
    }
  }

  render() {
    return (
      <div className="event">
        <div className="poster">
          <img src={require("../img/eventposters/" + this.props.event.poster)} alt={this.props.event.title + " Cover"} />
        </div>
        <div>
          <div className="info">
            <span className="tag">{this.state.hasEventOccured ? ContentStrings.events.common.upcoming : ContentStrings.events.common.past}</span>
            <h1>{this.props.event.title}</h1>
            <h3>{this.props.event.date} - {this.props.event.location}</h3>
            <div className="buttons">
              {this.props.event.aftermovie !== "false" ?
                <a href={this.props.event.aftermovie} target={"_blank"}>
                  <div className="video"><img src={require("../img/icons/play_white.svg")} />Watch video</div>
                </a> : null
              }
              <a href={this.props.event.eventlink} target={"_blank"}>
                <div className="eventlink"><img src={require("../img/icons/Spotify_Icon_White.png")} />Attend event</div>
              </a>
            </div>
            <div className="description">
              <p>{this.props.event.desc}</p>
            </div>
            <div className="lineup">
              <h3>Lineup</h3>
              <div className="wrapper">
                {this.props.event.artists.map((x, i) => (
                  <LineupArtist
                    artist={x}
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