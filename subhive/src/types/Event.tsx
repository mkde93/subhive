import EventArtist from "./EventArtist";

export default class Event {
  constructor(title: string, date: string, location: string, eventlink: string, aftermovie: string, desc: string, artists: EventArtist[]) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.eventlink = eventlink;
    this.aftermovie = aftermovie;
    this.desc = desc;
    this.artists = artists;
  }
  title: string;
  date: string;
  location: string;
  eventlink: string;
  aftermovie: string;
  desc: string;
  artists: EventArtist[];
}