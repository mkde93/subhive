import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import ContentStrings from "../ContentStrings";
import SectionEvent from "../components/SectionEvent";
import Event from "../types/Event";

export interface Props {
  backgroundImage: string;
  albumTitle: string;
  albumType: string;
  albumArtists: string;
  albumTracks: string;
  albumCover: string;
  spotifyUrl: string;
  soundcloudUrl: string;
  isHighlight: boolean;
}

export interface State {
  events: Event[];
}

class Events extends React.Component<Props> {
  getEvents() {
    const rawData = ContentStrings.events;
  }
  componentWillMount() {
    this.getEvents();
  }


  render() {
    return (
      <div className="page-bg"> {/* Not happy about this negative height fix */}
      </div>
    );
  }
}

export default Events;