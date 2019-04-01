import EventArtist from "./EventArtist";

export default class Event {
  constructor(title: string, date: string, location: string, eventlink: string, aftermovie: string, desc: string, artists: EventArtist[], poster: string, bgimg: string) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.eventlink = eventlink;
    this.aftermovie = aftermovie;
    this.desc = desc;
    this.artists = artists;
    this.poster = poster;
    this.bgimg = bgimg;
  }
  title: string;
  date: string;
  location: string;
  eventlink: string;
  aftermovie: string;
  desc: string;
  artists: EventArtist[];
  poster: string;
  bgimg: string;
}