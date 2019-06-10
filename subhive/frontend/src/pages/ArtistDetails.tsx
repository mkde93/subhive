import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import DataFunctions from "../util/DataFunctions";
import Artist from "../types/Artist";
import ArtistHighlight from "../components/ArtistHighlight";
import Album from "../types/Album";
import Event from "../types/Event";
import EventTile from "../components/EventTile";
import AlbumTile from "../components/AlbumTile";
import history from '../history'

export interface Props {
}

export interface State {
  artist: Artist;
  releases: Album[];
  events: Event[];
}

class ArtistDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    if (this.getArtistFromUrl().name !== "Artist not found") {
      this.setState({
        artist: this.getArtistFromUrl(),
        releases: this.getReleasesForArtist(),
        events: this.getEventsForArtist(),
      });
    } else {
      history.push('/')
      window.location.reload();
    }
  }

  getArtistFromUrl(): Artist {
    const allArtists = DataFunctions.getArtists();
    const searchKey = window.location.pathname.split("/")[2];
    let foundArtist: Artist = new Artist("Artist not found", "Location not found", "Bio not found", "https://www.facebook.com", "https://www.soundcloud.com",
      "https://www.twitter.com", "https://www.instagram.com", false, "temp.png", "temp.png")
    allArtists.forEach(a => {
      if (a.name.toLocaleLowerCase().split(" ").join("") === searchKey.toLocaleLowerCase().split(" ").join("")) {
        foundArtist = a;
      }
    })
    return foundArtist;
  }

  getReleasesForArtist(): Album[] {
    const allAlbums = DataFunctions.getAlbums();
    const artist: Artist = this.getArtistFromUrl();
    let filteredAlbums: Album[] = [];
    let isArtistOnAlbum: boolean = false;
    allAlbums.forEach(a => {
      a.artists.forEach(b => {
        if (b.name.toLocaleLowerCase() === artist.name.toLocaleLowerCase()) {
          isArtistOnAlbum = true;
        }
      })
      if (isArtistOnAlbum) {
        filteredAlbums.push(a);
        isArtistOnAlbum = false;
      }
    })

    return filteredAlbums;
  }


  getEventsForArtist(): Event[] {
    const allEvents = DataFunctions.getEvents();
    const artist: Artist = this.getArtistFromUrl();
    let filteredEvents: Event[] = [];
    let isArtistOnEvent: boolean = false;
    allEvents.forEach(a => {
      a.artists.forEach(b => {
        if (b.artist.name.toLocaleLowerCase() === artist.name.toLocaleLowerCase()) {
          isArtistOnEvent = true;
        }
      })
      if (isArtistOnEvent) {
        filteredEvents.push(a);
        isArtistOnEvent = false;
      }
    })
    return filteredEvents;
  }

  render() {
    return (
      <div className="page-bg">
        <section className="eventSection padding-top" style={{ backgroundImage: `url(${require("../img/lineupartists/artist-bg/" + this.state.artist.bgimg)})` }}>
          <div className="container-16">
            <ArtistHighlight
              artist={this.state.artist}
            />
          </div>
        </section>
        <section>
          {this.state.releases.length > 0 ? <div className="container-16">
            <h2>Featured on</h2>
            <div className="grid">
              {this.state.releases.map((x, i) => (
                i < 12 ?
                  <AlbumTile
                    key={i}
                    album={x}
                  /> : null
              ))}
            </div>
          </div> : null}
        </section>
        <section>
          <div className="container-16">
            <h2>Plays or played at</h2>
            <div className="grid">
              {this.state.events.map((x, i) => (
                i < 12 ?
                  <EventTile
                    key={i}
                    event={x}
                  /> : null
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ArtistDetails;