import * as React from "react";
import ContentStrings from "./ContentStrings";
import SectionAlbum from "./components/SectionAlbum";
import SectionEvent from "./components/SectionEvent";
import SectionAftermovie from "./components/SectionAftermovie";
import SectionSpotify from "./components/SectionSpotify";
import Footer from "./components/Footer";
import SectionInstagram from "./components/SectionInstagram";

class App extends React.Component {
  render() {
    return (
      <div>
        <SectionAlbum />
        <SectionEvent />
        <SectionAftermovie
          backgroundImage="subhive_001_bg.png"
          movieTitle="SUBHIVE: Safari Expedition - April 28"
          movieUrl="subhive_001.mp4"
          posterUrl="subhive_001.png"
        />
        {/*<SectionInstagram
          backgroundImage="Subhive_Origin_Dark.png"
        />*/}
        <SectionSpotify
          backgroundImage="Subhive_Origin_Dark.png"
          spotifyUrl={ContentStrings.spotifyPlaylist.playlistUrl}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
