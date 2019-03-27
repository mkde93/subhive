import Artist from "../types/Artist";
import Artists from "../data/Artists";
import Album from "../types/Album";
import Albums from "../data/Albums";
import Events from "../data/Events";
import EventArtist from "../types/EventArtist";
import Event from "../types/Event";

export default class DataFunctions {
    public static getArtists(): Artist[] {
        const artists: Artist[] = [];
        const artistData = Object.values(Artists);
        artistData.forEach(a => {
            const newArtist = new Artist(a.name, a.facebook, a.soundcloud, a.twitter, a.instagram, a.subhiveartist);
            artists.push(newArtist);
        });
        return artists;
    }

    public static getAlbums(): Album[] {
        const albums: Album[] = [];
        const albumsData = Object.values(Albums);
        albumsData.forEach(a => {
            const newAlbum = new Album(a.title, a.spotifyurl, a.soundcloudurl, a.type, a.releasedate, a.bgimg, a.cover, a.tracks, this.filterArtists(a.artists));
            albums.push(newAlbum);
        });
        return albums;
    }

    public static filterArtists(artists: string[]): Artist[] {
        const allArtists: Artist[] = this.getArtists();
        const albumArtists: Artist[] = [];
        artists.forEach(a => {
            const foundArtist: Artist = allArtists.filter(artist => artist.name = a)[0];
            albumArtists.push(new Artist(foundArtist.name, foundArtist.facebook, foundArtist.soundcloud, foundArtist.twitter, foundArtist.instagram, foundArtist.subhiveartist));
        });
        return albumArtists;
    }

    public static filterEventArtists(artists: string[], settimes: string[]): EventArtist[] {
        const eventArtists: EventArtist[] = [];
        const filteredArtists: Artist[] = this.filterArtists(artists);
        artists.forEach((a, i) => {
            const eventArtist: EventArtist = new EventArtist(filteredArtists.filter(fa => fa.name = a)[0], settimes[i]);
            eventArtists.push(eventArtist);
        })
        return eventArtists;
    }

    public static getEvents(): Event[] {
        const events: Event[] = [];
        const eventsData = Object.values(Events)
        eventsData.forEach(e => {
            const event = new Event(e.title, e.date, e.location, e.eventlink, e.aftermovie, e.desc, this.filterEventArtists(e.lineup, e.settimes));
            events.push(event);
        });
        return events;
    }

    public static toDate(dateStr: string) {
        const parts: string[] = dateStr.split(".")
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
      }
}