import * as React from "react";
import "./App.css";
import ContentStrings from "./ContentStrings";
import SectionAlbum from "./components/SectionAlbum";
import SectionEvent from "./components/SectionEvent";
import SectionAftermovie from "./components/SectionAftermovie";
import SectionSpotify from "./components/SectionSpotify";
import Footer from "./components/Footer";


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
          isHighlight={true}
        />
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
        <SectionAftermovie
          backgroundImage="subhive_001_bg.png"
          movieTitle="SUBHIVE: Safari Expedition - April 28"
          movieUrl="subhive_001.mp4"
          posterUrl="subhive_001.png"
        />
        <SectionSpotify
          backgroundImage="Subhive_Origin_Dark.png"
          spotifyUrl="asdf"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
