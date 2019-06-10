import EventArtist from "./EventArtist";

export default class Event {
  constructor(title: string, date: string, location: string, eventlink: string, aftermovie: string, desc: string, artists: EventArtist[], poster: string, bgimg: string, titlecolor: string, textcolor: string) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.eventlink = eventlink;
    this.aftermovie = aftermovie;
    this.desc = desc;
    this.artists = artists;
    this.poster = poster;
    this.bgimg = bgimg;
    this.titlecolor = titlecolor;
    this.textcolor = textcolor;
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
  titlecolor: string;
  textcolor: string;
}