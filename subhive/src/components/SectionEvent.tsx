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
  isHighlight: boolean;
  lineupArtists: string;
  lineupSettimes: string;
  lineupSocials: string;
}

class SectionEvent extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.isHighlight ?
          <section style={{ backgroundImage: `url(${require("../img/eventposters/" + this.props.backgroundImage)})` }} className="eventSection">
            <div className="container-16">
              <EventHighlight
                eventTitle={this.props.eventTitle}
                eventDate={this.props.eventDate}
                eventLocation={this.props.eventLocation}
                eventPoster={this.props.eventPoster}
                eventLink={this.props.eventLink}
                eventMovie={this.props.eventMovie}
                eventDescription={this.props.eventDescription}
                lineupArtists={this.props.lineupArtists}
                lineupSettimes={this.props.lineupSettimes}
                lineupSocials={this.props.lineupSocials}
              />
            </div>
          </section> :
          <section style={{}} className="eventSection">
            <div className="container-16">
              <EventHighlight
                eventTitle={this.props.eventTitle}
                eventDate={this.props.eventDate}
                eventLocation={this.props.eventLocation}
                eventPoster={this.props.eventPoster}
                eventLink={this.props.eventLink}
                eventMovie={this.props.eventMovie}
                eventDescription={this.props.eventDescription}
                lineupArtists={this.props.lineupArtists}
                lineupSettimes={this.props.lineupSettimes}
                lineupSocials={this.props.lineupSocials}
              />
            </div>
          </section>}
      </div>
    );
  }
}
export default SectionEvent;