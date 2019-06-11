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
import axios from "axios";
import { CircularProgress } from "@material-ui/core";


export interface Props {
}

export interface State {
  artist: Artist;
  releases: Album[];
  events: Event[];
  loading: boolean;
}

class ArtistDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/artists/getbyname',
      params: {
        artistName: this.getArtistNameFromUrl(),
      }
    })
      .then((response) => {
        this.setState({
          artist: DataFunctions.createArtistsData(response.data)[0],
        }, () => {
          this.setReleasesForArtist();
        });
      });
  }

  getArtistNameFromUrl(): String {
    return window.location.pathname.split("/")[2];
  }

  setReleasesForArtist() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/albums/',
    })
      .then((response) => {
        const allAlbums = DataFunctions.createAlbumObjects(response.data);
        const artist: Artist = this.state.artist;
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
        this.setState({
          releases: filteredAlbums,
        }, () => {
          this.setEventsForArtist();
        });
      });
  }


  setEventsForArtist() {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/events/',
    })
      .then((response) => {
        const allEvents = DataFunctions.createEventsObjects(response.data);
        const artist: Artist = this.state.artist;
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
        this.setState({
          events: filteredEvents,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="page-bg">
        {this.state.loading ? <CircularProgress /> :
          <div>
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
          </div>}
      </div>
    );
  }
}

export default ArtistDetails;