import * as React from "react";
import "./css/grid.css";
import "../index.scss";

export interface Props {
  name: string;
}

class Music extends React.Component<Props> {
  render() {
    return (
      <div className="container-16">
        <h1>Music by Subhive</h1>
      </div>
    );
  }
}

export default Music;