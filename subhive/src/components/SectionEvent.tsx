import * as React from "react";
import "../index.css";
import EventHighlight from "./EventHighlight";

export interface Props {
  backgroundImage: string;
  eventTitle: string;
  eventDate: string;
  eventLocation: string;
  eventPoster: string;
  eventLink: string;
  eventMovie: string;
  eventDescription: string;
}

class SectionAlbum extends React.Component<Props> {
  render() {
    return (
      <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="eventSection">
        <div className="container-16">
          <EventHighlight
            eventTitle={this.props.eventTitle}
            eventDate={this.props.eventDate}
            eventLocation={this.props.eventLocation}
            eventPoster={this.props.eventPoster}
            eventLink={this.props.eventLink}
            eventMovie={this.props.eventMovie}
            eventDescription={this.props.eventDescription}
          />
        </div>
      </section>
    );
  }
}
export default SectionAlbum;