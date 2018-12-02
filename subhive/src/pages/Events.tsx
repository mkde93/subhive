import * as React from "react";
import "./css/grid.css";
import "../index.scss";

export interface Props {
  name: string;
}

class Events extends React.Component<Props> {
  componentDidMount() {
    console.log("hest"); /* Målet er at render min html, er den her "Mount" del relevant? */
  }
  render() {
    return (
      <div className="container-full music">
        <div className="container-12">
          <div className="header">
            <h1>Events by Subhive</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;