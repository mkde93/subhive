import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionEvent from "../components/SectionEvent";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventTile from "../components/EventTile";
import Footer from "../components/Footer";

export interface Props {
}

export interface State {
  events: Event[];
}

class Events extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      events: DataFunctions.getEventsExceptNewest(),
    };
  }
  render() {
    return (
      <div className="page-bg">
        <SectionEvent frontpage={false} />
        <div className="container-16">
          <h2>Past Events</h2>
          <div className="grid">
            {this.state.events.map((x, i) => (
              <EventTile
                key={i}
                event={x}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;