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
import axios from "axios";
import APIs from "../APIs";

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
    this.state = {
      artist: new Artist("Artist not found", "Location not found", "Bio not found", "https://www.facebook.com", "https://www.soundcloud.com",
        "https://www.twitter.com", "https://www.instagram.com", false, "temp.png", "temp.png"),
      events: [],
      releases: [],
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getEventsApi(), this.getReleases()])
      .then(axios.spread((artists, events, releases) => {
        DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data));
        const artist = DataFunctions.getSpecificArtist(DataFunctions.createArtistsObjects(artists.data), this.getArtistNameFromUrl());
        if (artist.name !== "NONE") {
          this.setState({
            artist: artist,
            releases: this.getReleasesForArtist(DataFunctions.createAlbumObjects(releases.data, DataFunctions.createArtistsObjects(artists.data))),
            events: this.getEventsForArtist(DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data))),
          });
        }
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
  }

  getArtistNameFromUrl(): String {
    return window.location.pathname.split("/")[2];
  }

  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getEventsApi() {
    return axios.get(APIs.apis.eventlist);
  }

  getReleases() {
    return axios.get(APIs.apis.releaseslist);
  }

  getReleasesForArtist(data: Album[]): Album[] {
    const artist = this.getArtistNameFromUrl();
    let filteredAlbums: Album[] = [];
    let isArtistOnAlbum: boolean = false;
    data.forEach(a => {
      a.artists.forEach(b => {
        if (b.name.toLocaleLowerCase().split(" ").join("") === artist.toLocaleLowerCase().split(" ").join("")) {
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


  getEventsForArtist(data: Event[]): Event[] {
    const artist = this.getArtistNameFromUrl();
    let filteredEvents: Event[] = [];
    let isArtistOnEvent: boolean = false;
    data.forEach(a => {
      a.artists.forEach(b => {
        if (b.artist.name.toLocaleLowerCase().split(" ").join("") === artist.toLocaleLowerCase().split(" ").join("")) {
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
        <section className="eventSection padding-top" style={{ backgroundImage: `url(${this.state.artist.bgimg})` }}>
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