import * as React from "react";
import "./css/grid.css";
import "../index.scss";

export interface Props {
}

export interface State {
}

class Live extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="page-bg">
        <div className="container-16 padding-top artist-display">
          <div className="live">
            <iframe src="https://player.twitch.tv/?channel=subhive&parent=www.subhive.dk" scrolling="no" height="100%" width="80%" />
            <iframe id="chat_embed" src="https://www.twitch.tv/embed/subhive/chat?parent=www.subhive.dk" height="100%" width="20%" />
          </div>
        </div>
      </div>
    );
  }
}

export default Live;