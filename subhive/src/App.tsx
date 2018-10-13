import * as React from "react";
import "./App.css";
import ContentStrings from "./ContentStrings";
import SectionAlbum from "./components/SectionAlbum";
import SectionEvent from "./components/SectionEvent";


class App extends React.Component {
  render() {
    return (
      <div>
        <SectionAlbum
          backgroundImage="Subhive_Origin_Dark.png"
          albumTitle={ContentStrings.albums.titles.origin}
          albumType={ContentStrings.albums.type.origin}
          albumArtists={ContentStrings.albums.artists.variousartists}
          albumTracks={ContentStrings.albums.tracks.origin}
          albumCover={"Subhive_001_Cover.jpg"}
          spotifyUrl={ContentStrings.albums.spotifyurls.origin}
          soundcloudUrl={ContentStrings.albums.soundcloudurls.origin}
        />
        <SectionEvent
          backgroundImage="Subhive_Origin_Dark.png"
          eventTitle={ContentStrings.events.titles.subhive_1}
          eventDate={ContentStrings.events.dates.subhive_1}
          eventLocation={ContentStrings.events.locations.subhive_1}
          eventPoster={"Subhive_5_Poster.png"}
          eventLink={ContentStrings.events.eventLinks.subhive_1}
          eventMovie={ContentStrings.events.afterMovies.subhive_1}
          eventDescription={ContentStrings.events.description.subhive_1}
        />
      </div>
    );
  }
}

export default App;
