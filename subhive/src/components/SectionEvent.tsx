import * as React from "react";
import EventHighlight from "./EventHighlight";
import Events from "../data/Events";
import Event from "../types/Event";
import EventArtist from "../types/EventArtist";
import Artist from "../types/Artist";

export interface Props {
}

class SectionEvent extends React.Component<Props> {
  render() {
    return (
      <div>
        <section style={{ backgroundImage: `url(${require("../img/eventposters/" + "Subhive_5_bg.png")})` }} className="eventSection">
          <div className="container-16">
          </div>
        </section>
      </div>
    );
  }
}
export default SectionEvent;