import * as React from "react";
import "./App.css";
import SectionAlbum from "./components/SectionAlbum";
import ContentStrings from "./ContentStrings";


class App extends React.Component {
  render() {
    return (
      <div>
        <SectionAlbum 
          backgroundImage="Subhive_Origin.png"
          albumTitle={ContentStrings.albums.titles.origin}
          albumType={ContentStrings.albums.type.origin}
          albumArtists={ContentStrings.albums.artists.variousartists}
          albumTracks={ContentStrings.albums.tracks.origin}
          albumCover={"Subhive_001_Cover.jpg"}
          spotifyUrl={ContentStrings.albums.spotifyurls.origin}
          soundcloudUrl={ContentStrings.albums.soundcloudurls.origin}
        />
      </div>
    );
  }
}

export default App;
