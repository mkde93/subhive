import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import DataFunctions from "../util/DataFunctions";
import Footer from "../components/Footer";
import Artist from "../types/Artist";
import ArtistHighlight from "../components/ArtistHighlight";

export interface Props {
}

export interface State {
  artist: Artist;
}

class ArtistDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      artist: this.getArtistFromUrl(),
    };
  }

  getArtistFromUrl(): Artist {
    const allArtists = DataFunctions.getArtists();
    const searchKey = window.location.pathname.split("/")[2];
    let foundArtist: Artist = new Artist("Artist not found", "Location not found", "Bio not found", "https://www.facebook.com", "https://www.soundcloud.com",
      "https://www.twitter.com", "https://www.instagram.com", false, "temp.png")
    allArtists.forEach(a => {
      if (a.name.toLocaleLowerCase() === searchKey.toLocaleLowerCase()) {
        foundArtist = a;
      }
    })
    return foundArtist;
  }

  render() {
    return (
      <div className="page-bg">
        <section className="eventSection padding-top">
          <div className="container-16">
            <ArtistHighlight
              artist={this.state.artist}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ArtistDetails;