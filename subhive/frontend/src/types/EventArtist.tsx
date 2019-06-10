import Artist from "./Artist";

export default class EventArtist {
  constructor(artist: Artist, settime: string) {
    this.artist = artist;
    this.settime = settime;
  }
  artist: Artist;
  settime: string;
}