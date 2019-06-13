import Artist from "./Artist";

export default class Album {
	constructor($title: string, $spotifyurl: string, $soundcloudurl: string, $type: string, $releasedate: string, $bgimg: string, $cover: string, $tracks: string[], $artists: Artist[], $soundcloudtracklinks: string[]) {
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
}