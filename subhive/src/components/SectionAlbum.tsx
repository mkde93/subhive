import * as React from "react";
import AlbumHighlight from "./AlbumHighlight";

export interface Props {
  backgroundImage: string;
  albumTitle: string;
  albumType: string;
  albumArtists: string;
  albumTracks: string;
  albumCover: string;
  spotifyUrl: string;
  soundcloudUrl: string;
  isHighlight: boolean;
}

class SectionAlbum extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.isHighlight ?
          <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="albumSection">
            <div className="container-16">
              <AlbumHighlight
                albumTitle={this.props.albumTitle}
                albumType={this.props.albumType}
                albumArtists={this.props.albumArtists}
                albumTracks={this.props.albumTracks}
                albumCover={this.props.albumCover}
                spotifyUrl={this.props.spotifyUrl}
                soundcloudUrl={this.props.soundcloudUrl}
              />
            </div>
          </section> :
          <section style={{ backgroundImage: `url(${require("../img/" + this.props.backgroundImage)})` }} className="albumSection">
            <div className="container-16">
              <AlbumHighlight
                albumTitle={this.props.albumTitle}
                albumType={this.props.albumType}
                albumArtists={this.props.albumArtists}
                albumTracks={this.props.albumTracks}
                albumCover={this.props.albumCover}
                spotifyUrl={this.props.spotifyUrl}
                soundcloudUrl={this.props.soundcloudUrl}
              />
            </div>
          </section>}
      </div>
    );
  }
}
export default SectionAlbum;