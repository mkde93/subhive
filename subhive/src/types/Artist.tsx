export default class Artist {
  constructor(name: string, facebook: string, soundcloud: string, twitter: string, instagram: string, subhiveartist: boolean, img: string) {
    this.name = name;
    this.facebook = facebook;
    this.soundcloud = soundcloud;
    this.twitter = twitter;
    this.instagram = instagram;
    this.subhiveartist = subhiveartist;
    this.img = img;
  }
  name: string;
  facebook: string;
  soundcloud: string;
  twitter: string;
  instagram: string;
  subhiveartist: boolean;
  img: string;
}