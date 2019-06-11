import Artist from "../types/Artist";
import Artists from "../data/Artists";
import Album from "../types/Album";
import Albums from "../data/Albums";
import Events from "../data/Events";
import EventArtist from "../types/EventArtist";
import Event from "../types/Event";

export default class DataFunctions {
    public static createAlbumObjects(data: Object): Album[] {
        const albums: Album[] = [];
        const albumsData = Object.values(data);
        albumsData.forEach(a => {
            const newAlbum = new Album(a.title, a.spotifyurl, a.soundcloudurl, a.type, a.releasedate, a.bgimg, a.cover, a.tracks.split(","), this.filterArtists(a.artist.split(",")));
            albums.push(newAlbum);
        });
        return albums;
    }


    public static createArtistsData(data: Object): Artist[] {
        const artists: Artist[] = [];
        const artistData = Object.values(data);
        console.log(artistData);
        artistData.forEach(artist => {
            const newArtist = new Artist(artist.name, artist.location, artist.bio, artist.facebook, artist.soundcloud, artist.twitter, artist.instagram, Boolean(artist.subhiveartist), artist.img, artist.bgimg);
            console.log(newArtist)
            artists.push(newArtist);
        });
        console.log(artists);

        return artists;
    }

    public static getArtists(): Artist[] {
        const artists: Artist[] = [];
        const artistData = Object.values(Artists);
        artistData.forEach(artist => {
            const newArtist = new Artist(artist.name, artist.location, artist.bio, artist.facebook, artist.soundcloud, artist.twitter, artist.instagram, artist.subhiveartist, artist.img, artist.bgimg);
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
        const filteredArtists: Artist[] = [];
        artists.forEach(a => {
            let newArtist;
            let filtered: Artist[] = allArtists.filter(artist => artist.name.toLowerCase() === a.toLowerCase());
            if (filtered.length === 0) {
                //TODO: Add dummy data
                newArtist = new Artist(a, "NONE", "NONE", "NONE", "NONE", "NONE", "NONE", false, "temp.png", "temp.png");
            } else {
                newArtist = new Artist(filtered[0].name, filtered[0].location, filtered[0].bio, filtered[0].facebook, filtered[0].soundcloud, filtered[0].twitter, filtered[0].instagram, filtered[0].subhiveartist, filtered[0].img, filtered[0].bgimg);
            }
            filteredArtists.push(newArtist);
        });
        return filteredArtists;
    }

    public static filterEventArtists(artists: string[], settimes: string[]): EventArtist[] {
        const eventArtists: EventArtist[] = [];
        const filteredArtists: Artist[] = this.filterArtists(artists);
        artists.forEach((a, i) => {
            const eventArtist: EventArtist = new EventArtist(filteredArtists.filter(fa => fa.name.toLowerCase() === a.toLowerCase())[0], settimes[i]);
            eventArtists.push(eventArtist);
        })
        return eventArtists;
    }

    public static getEvents(): Event[] {
        const events: Event[] = [];
        const eventsData = Object.values(Events)
        eventsData.forEach(e => {
            const event = new Event(e.title, e.date, e.location, e.eventlink, e.aftermovie, e.desc, this.filterEventArtists(e.lineup, e.settimes), e.poster, e.bgimg, e.titlecolor, e.textcolor);
            events.push(event);
        });

        events.sort(function (a, b) {
            const aReleasedate = DataFunctions.toDate(a.date);
            const bReleasedate = DataFunctions.toDate(b.date);
            return aReleasedate > bReleasedate ? -1 : aReleasedate < bReleasedate ? 1 : 0;
        })
        return events;
    }

    public static getEventsExceptNewest(): Event[] {
        const events: Event[] = this.getEvents();
        events.shift();
        return events;
    }

    public static getAlbumsExceptNewest(): Album[] {
        const albums: Album[] = this.getAlbums();
        albums.sort(function (a, b) {
            const aReleasedate = DataFunctions.toDate(a.releasedate);
            const bReleasedate = DataFunctions.toDate(b.releasedate);
            return aReleasedate > bReleasedate ? -1 : aReleasedate < bReleasedate ? 1 : 0;
        })
        albums.shift();
        return albums;
    }

    public static toDate(dateStr: string) {
        const parts: string[] = dateStr.split(".")
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }

    public static getUpcomingEvents(): Event[] {
        const events: Event[] = this.getEvents();
        const upcomingEvents: Event[] = events.filter(e => this.toDate(e.date) > new Date());
        return upcomingEvents;
    }
}