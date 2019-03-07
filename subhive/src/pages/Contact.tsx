import * as React from "react";
import "./css/grid.css";
import "../index.scss";


export interface Props {
  name: string;
}

class Contact extends React.Component<Props> {
  render() {
    return (
      <div className="container-16">
        <h1>Contact Subhive</h1>
      </div>
    );
  }
}

export default Contact;