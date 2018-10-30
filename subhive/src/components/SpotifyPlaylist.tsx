import * as React from "react";
import "../index.css";
import { post } from "request";
import express from "express";

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
        <div>
          hej
        </div>
      </section>
    );
  }
}
export default SpotifyPlaylist;