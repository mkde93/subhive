import * as React from "react";
import Event from "../types/Event";
import { Link } from "react-router-dom";

export interface Props {
  event: Event
}

class EventTile extends React.Component<Props> {

  render() {
    return (
      <div>
        <Link to={"/events/" + this.props.event.title.replace(/\s/g, "") + this.props.event.date.replace(/\./g, "-")}>
          <div className="eventgrid">
            <img src={require("../img/eventposters/" + this.props.event.poster)} />
            <div className="event">
              <span className="title">{this.props.event.title}</span>
              <span className="date">{this.props.event.date}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventTile;
