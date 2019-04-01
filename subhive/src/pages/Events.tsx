import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionEvent from "../components/SectionEvent";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventTile from "../components/EventTile";

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
      <div className="page-bg"> {/* Not happy about this negative height fix */}
        <SectionEvent />

        <div className="more-events"> {/* Not happy about this negative height fix */}
          {this.state.events.map((x, i) => (
            <EventTile
              key={i}
              event={x}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Events;