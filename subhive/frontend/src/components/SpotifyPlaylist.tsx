import * as React from "react";

export interface Props {
  spotifyUrl: string;
}

export interface State {
  spotifyToken: string;
}

class SpotifyPlaylist extends React.Component<Props, State> {
  render() {
    return (
      <section className="playlist">
        <div className="spotifyplaylist">
          <iframe
            src="https://open.spotify.com/embed/user/m4b4uyyjsqiayu25y7ud0zbqy/playlist/3ZODyGLF5RCS5S6WLlQoqr"
            width="1000"
            height="500"
          />
        </div>
      </section>
    );
  }
}
export default SpotifyPlaylist;