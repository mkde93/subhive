import Artist from "./Artist";

export default class Album {
  constructor($title: string, $spotifyurl: string, $soundcloudurl: string, $type: string, $releasedate: string, $bgimg: string, $cover: string, $tracks: string[], $artists: Artist[], $soundcloudtracklinks: string[], $gradient_bl: string, $gradient_tr: string) {
    this.title = $title;
    this.spotifyurl = $spotifyurl;
    this.soundcloudurl = $soundcloudurl;
    this.type = $type;
    this.releasedate = $releasedate;
    this.bgimg = $bgimg;
    this.cover = $cover;
    this.tracks = $tracks;
    this.artists = $artists;
    this.soundcloudtracklinks = $soundcloudtracklinks;
    this.gradient_bl = $gradient_bl;
    this.gradient_tr = $gradient_tr;
  }

  title: string;
  spotifyurl: string;
  soundcloudurl: string;
  type: string;
  releasedate: string;
  bgimg: string;
  cover: string;
  tracks: string[];
  artists: Artist[];
  soundcloudtracklinks: string[];
  gradient_bl: string;
  gradient_tr: string;
}