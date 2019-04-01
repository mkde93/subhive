import * as React from "react";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "./EventHighlight";

export interface Props {
}

export interface State {
  event: Event;
}

class SectionEvent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      event: DataFunctions.getEvents()[0],
    };
  }

  render() {
    return (
      <div>
        <section style={{ backgroundImage: `url(${require("../img/eventposters/" + "Subhive_5_bg.png")})` }} className="eventSection">
          <div className="container-16">
            <EventHighlight
              event={this.state.event}
            />
          </div>
        </section>
      </div>
    );
  }
}
export default SectionEvent;