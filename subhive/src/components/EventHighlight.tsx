import * as React from "react";
import "../index.css";
import ContentStrings from "../ContentStrings";
import LineupArtist from "./LineupArtist";

export interface Props {
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventPoster: string;
  eventLink: string;
  eventMovie: string;
  eventDescription: string;
  lineupArtists: string;
  lineupSettimes: string;
  lineupSocials: string;
}

export interface State {
  hasEventOccured: boolean;
  lineupArtists: string[];
  lineupSettimes: string[];
  lineupSocials: string[];
}



class EventHighlight extends React.Component<Props, State> {
  componentWillMount() {
    this.hasEventBeenHeld();
    this.fillArtists();
  }

  hasEventBeenHeld() {
    let eventDate: Date = new Date();
    let currentDate: Date = new Date();
    eventDate.setDate(Number(this.props.eventDate.split(".")[0]));
    eventDate.setMonth(Number(this.props.eventDate.split(".")[1]) - 1);
    eventDate.setFullYear(Number(this.props.eventDate.split(".")[2]));

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

  fillArtists() {
    this.setState({
      lineupArtists: this.props.lineupArtists.split(","),
      lineupSettimes: this.props.lineupSettimes.split(","),
      lineupSocials: this.props.lineupSocials.split(",")
    });
  }

  getArtistImage(name: string): string {
    return name.replace(/ /g, "_") + ".png";
  }

  render() {
    return (
      <div className="event">
        <div className="poster">
          <img src={require("../img/eventposters/" + this.props.eventPoster)} alt={this.props.eventTitle + " Cover"} />
        </div>
        <div className="info">
          <span>{this.state.hasEventOccured ? ContentStrings.events.common.upcoming : ContentStrings.events.common.past}</span>
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
        <div className="lineup">
          <h3>Lineup</h3>
          {this.state.lineupArtists.map((x, i) => (
            <LineupArtist
              artist={x}
              settime={this.state.lineupSettimes[i]}
              social={this.state.lineupSocials[i]}
              artistimg={this.getArtistImage(x)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default EventHighlight;