import * as React from "react";
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
        <SectionEvent frontpage={true} />
        <SectionAftermovie
          backgroundImage="subhive_001_bg.png"
          movieTitle="SUBHIVE: Safari Expedition - April 28"
          movieUrl="subhive_001.mp4"
          posterUrl="subhive_001.png"
        />
        <SectionSpotify
          backgroundImage="https://assets.subhive.dk/imgs/Subhive_Origin_Dark.png"
          spotifyUrl={"https://open.spotify.com/embed/user/m4b4uyyjsqiayu25y7ud0zbqy/playlist/3ZODyGLF5RCS5S6WLlQoqr"}
        />
      </div>
    );
  }
}

export default App;
