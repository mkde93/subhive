import * as React from "react";
import "./css/grid.css";
import "../index.scss";


export interface Props {
  name: string;
}

class Contact extends React.Component<Props> {
  componentDidMount() {
    console.log("hest"); /* Målet er at render min html, er den her "Mount" del relevant? */
  }
  render() {
    return (
      <div className="container-full music">
        <div className="container-12">
          <div className="header">
            <h1>Contact Subhive</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;