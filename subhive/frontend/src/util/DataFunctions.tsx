import Artist from "../types/Artist";
import Artists from "../data/Artists";
import Album from "../types/Album";
import Albums from "../data/Albums";
import Events from "../data/Events";
import EventArtist from "../types/EventArtist";
import Event from "../types/Event";

export default class DataFunctions {
    public static createArtistsObjects(data: Object): Artist[] {
        const artists: Artist[] = [];
        const artistData = Object.values(data);
        artistData.forEach(artist => {
            const newArtist = new Artist(artist.field_name[0] !== undefined ? artist.field_name[0].value : "NONE",
                artist.field_location[0] !== undefined ? artist.field_location[0].value : "NONE",
                artist.field_bio[0] !== undefined ? artist.field_bio[0].value : "",
                artist.field_facebook[0] !== undefined ? artist.field_facebook[0].value : "NONE",
                artist.field_soundcloud[0] !== undefined ? artist.field_soundcloud[0].value : "NONE",
                artist.field_twitt[0] !== undefined ? artist.field_twitt[0].value : "NONE",
                artist.field_instagram[0] !== undefined ? artist.field_instagram[0].value : "NONE",
                artist.field_subhiveartist[0] !== undefined ? artist.field_subhiveartist[0].value : "NONE",
                artist.field_img[0] !== undefined ? artist.field_img[0].value : "NONE",
                artist.field_bgimg[0] !== undefined ? artist.field_bgimg[0].value : "NONE");
            artists.push(newArtist);
        });
        return artists;
    }

    public static createEventsObjects(data: Object, artists: Artist[]): Event[] {
        const events: Event[] = [];
        const eventsData = Object.values(data)
        eventsData.forEach(e => {
            const event = new Event(e.field_title[0].value,
                e.field_dateevent[0].value,
                e.field_locationevent[0].value,
                e.field_eventlink[0].value,
                e.field_aftermovie[0].value,
                e.field_desc[0].value,
                this.filterEventArtists(
                    e.field_lineup[0].value.split(","),
                    e.field_settiomes[0] !== undefined ? e.field_settiomes[0].value.split(",") : "",
                    artists),
                e.field_poster[0].value,
                e.field_bgimgevent[0].value,
                e.field_titlecolor[0].value,
                e.field_textcolor[0].value);
            events.push(event);
        });

        events.sort(function (a, b) {
            const aReleasedate = DataFunctions.toDate(a.date);
            const bReleasedate = DataFunctions.toDate(b.date);
            return aReleasedate > bReleasedate ? -1 : aReleasedate < bReleasedate ? 1 : 0;
        })
        return events;
    }


    public static createAlbumObjects(data: Object, artists: Artist[]): Album[] {
        const albums: Album[] = [];
        const albumsData = Object.values(data);
        albumsData.forEach(a => {
            const newAlbum = new Album(
                a.field_titlerelease[0].value,
                a.field_spotifyurl[0].value,
                a.field_soundcloudurl[0].value,
                a.field_type[0].value,
                a.field_releasedate[0].value,
                a.field_album_bg[0].value,
                a.field_album_cover[0].value,
                a.field_tracks[0].value.split(","),
                this.filterArtists(a.field_artists[0].value.split(","),
                artists));
            albums.push(newAlbum);
        });
        return albums;
    }

    public static getSpecificArtist(artists: Artist[], artistName: String): Artist {
        let returnArtist: Artist = new Artist("NONE", "NONE", "NONE", "NONE", "NONE", "NONE", "NONE", false, "", "");
        artists.forEach(a => {
            if (a.name.toLowerCase().split(" ").join("") === artistName.toLowerCase().split(" ").join("")) {
                returnArtist = a;
            }
        })
        return returnArtist;
    }

    public static filterArtists(artists: string[], artistObjects: Artist[]): Artist[] {
        const filteredArtists: Artist[] = [];
        artists.forEach(a => {
            let newArtist;
            let filtered: Artist[] = artistObjects.filter(artist => artist.name.toLowerCase() === a.toLowerCase());
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

    public static filterEventArtists(artists: string[], settimes: string[], artistObjects: Artist[]): EventArtist[] {
        const eventArtists: EventArtist[] = [];
        const filteredArtists: Artist[] = this.filterArtists(artists, artistObjects);
        artists.forEach((a, i) => {
            const eventArtist: EventArtist = new EventArtist(filteredArtists.filter(fa => fa.name.toLowerCase() === a.toLowerCase())[0], settimes[i]);
            eventArtists.push(eventArtist);
        })
        return eventArtists;
    }

    public static toDate(dateStr: string) {
        const parts: string[] = dateStr.split(".")
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }
}