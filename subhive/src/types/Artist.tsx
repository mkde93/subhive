export default class Artist {
  constructor(name: string, facebook: string, soundcloud: string, twitter: string, instagram: string, subhiveartist: boolean) {
    this.name = name;
    this.facebook = facebook;
    this.soundcloud = soundcloud;
    this.twitter = twitter;
    this.instagram = instagram;
    this.subhiveartist = subhiveartist;
  }
  name: string;
  facebook: string;
  soundcloud: string;
  twitter: string;
  instagram: string;
  subhiveartist: boolean;
}