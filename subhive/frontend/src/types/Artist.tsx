export default class Artist {
  constructor(name: string, location: string, bio: string, facebook: string, soundcloud: string, twitter: string, instagram: string, subhiveartist: boolean, img: string, bgimg: string, ) {
    this.name = name;
    this.location = location;
    this.bio = bio;
    this.facebook = facebook;
    this.soundcloud = soundcloud;
    this.twitter = twitter;
    this.instagram = instagram;
    this.subhiveartist = subhiveartist;
    this.img = img;
    this.bgimg = bgimg;
  }
  name: string;
  location: string;
  bio: string;
  facebook: string;
  soundcloud: string;
  twitter: string;
  instagram: string;
  subhiveartist: boolean;
  img: string;
  bgimg: string;
}