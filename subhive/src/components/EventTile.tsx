import * as React from "react";
import Event from "../types/Event";
import { Link } from "react-router-dom";

export interface Props {
  event: Event
  updateEvent: () => void;
}

class EventTile extends React.Component<Props> {

  handleClickEvent = () => {
    this.props.updateEvent();
  }

  render() {
    return (
      <div className="event-grid">
        <Link className="remove-decoration" to={"/events/" + this.props.event.title.replace(/\s/g, "") + this.props.event.date.replace(/\./g, "-")} onClick={this.handleClickEvent}>
          <div>
            <img src={require("../img/eventposters/" + this.props.event.poster)} />
            <div className="event">
              <p className="title">{this.props.event.title}</p>
              <div>
                <p className="date">{this.props.event.date}</p>
                <p className="location">{this.props.event.location}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default EventTile;
