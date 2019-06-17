import * as React from "react";
import Artist from "../types/Artist";

export interface Props {
  artist: Artist;
}

export interface State {
}


class ArtistHighlight extends React.Component<Props, State> {
  render() {
    return (
      <div className="artist-highlight">
        <div className="poster">
          <img src={this.props.artist.img} alt={this.props.artist.img + " Cover"} />
        </div>
        <div>
          <div className="info">
            <div>
              <h1>{this.props.artist.name}</h1>
              <h3>{this.props.artist.location}</h3>
              <p>{this.props.artist.bio}</p>
            </div>
            <div className="socials">
              {this.props.artist.facebook !== "NONE" ? <a target="_blank" href={this.props.artist.facebook}>
                <svg className="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.002 44.395">
                  <path id="Path_10" data-name="Path 10" d="M45.175.009,39.418,0C32.951,0,28.771,4.288,28.771,10.926v5.037H22.982a.905.905,0,0,0-.905.906v7.3a.905.905,0,0,0,.905.905h5.788V43.49a.9.9,0,0,0,.905.905h7.552a.905.905,0,0,0,.905-.905V25.073H44.9a.9.9,0,0,0,.905-.905l0-7.3a.906.906,0,0,0-.906-.906h-6.77v-4.27c0-2.053.489-3.094,3.163-3.094h3.878a.905.905,0,0,0,.9-.905V.914A.906.906,0,0,0,45.175.009Z" transform="translate(-22.077)" />
                </svg>
              </a> : null}
              {this.props.artist.soundcloud !== "NONE" ? <a target="_blank" href={this.props.artist.soundcloud}>
                <svg className="soundcloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 24.999">
                  <path id="Path_11" data-name="Path 11" d="M12.5,97.833h3.125V78.154A8.034,8.034,0,0,0,12.5,79.878ZM6.25,84.52V97.811l.2.022H9.375V84.5H6.452ZM0,91.164a6.7,6.7,0,0,0,3.125,5.689V85.481A6.688,6.688,0,0,0,0,91.164Zm18.75,6.669h3.125V79.022a7.8,7.8,0,0,0-3.125-1.116ZM43.548,84.5H41.791a10.251,10.251,0,0,0,.145-1.666,9.843,9.843,0,0,0-9.678-10A9.5,9.5,0,0,0,25,76.259V97.832H43.548a6.67,6.67,0,0,0,0-13.333Z" transform="translate(0 -72.834)" />
                </svg>
              </a> : null}
              {this.props.artist.instagram !== "NONE" ? <a target="_blank" href={this.props.artist.instagram}>
                <svg className="instagram" id="instagram-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path id="Path_13" data-name="Path 13" d="M28.961,0H11.038A11.051,11.051,0,0,0,0,11.039V28.961A11.051,11.051,0,0,0,11.038,40H28.961A11.051,11.051,0,0,0,40,28.961V11.039A11.051,11.051,0,0,0,28.961,0Zm7.49,28.961a7.5,7.5,0,0,1-7.49,7.49H11.038a7.5,7.5,0,0,1-7.489-7.49V11.039a7.5,7.5,0,0,1,7.489-7.49H28.961a7.5,7.5,0,0,1,7.49,7.49V28.961Z" />
                  <path id="Path_14" data-name="Path 14" d="M51.275,40.97A10.307,10.307,0,1,0,61.582,51.277,10.319,10.319,0,0,0,51.275,40.97Zm0,17.064a6.758,6.758,0,1,1,6.758-6.758A6.765,6.765,0,0,1,51.275,58.034Z" transform="translate(-31.275 -31.277)" />
                  <path id="Path_15" data-name="Path 15" d="M121.524,28.251a2.6,2.6,0,1,0,1.841.762A2.613,2.613,0,0,0,121.524,28.251Z" transform="translate(-90.784 -21.567)" />
                </svg>
              </a> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArtistHighlight;