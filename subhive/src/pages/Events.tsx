import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import ContentStrings from "../ContentStrings";
import SectionEvent from "../components/SectionEvent";
import SubPageTitle from "../components/SubPageTitle";

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

class Events extends React.Component<Props> {
  render() {
    return (
      <SectionEvent
        backgroundImage="Subhive_5_bg.png"
        eventTitle={ContentStrings.events.titles.subhive_1}
        eventDate={ContentStrings.events.dates.subhive_1}
        eventLocation={ContentStrings.events.locations.subhive_1}
        eventPoster={"Subhive_5_Poster.png"}
        eventLink={ContentStrings.events.eventLinks.subhive_1}
        eventMovie={ContentStrings.events.afterMovies.subhive_1}
        eventDescription={ContentStrings.events.description.subhive_1}
        isHighlight={true}
        lineupArtists={ContentStrings.events.lineup.artists.subhive_1}
        lineupSettimes={ContentStrings.events.lineup.settime.subhive_1}
        lineupSocials={ContentStrings.events.lineup.link.subhive_1}
      />

    );
  }
}

export default Events;