import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "../components/EventHighlight";
import EventTile from "../components/EventTile";
import { Link } from "react-router-dom";

export interface Props {
}

export interface State {
  event: Event;
  upcomingEvents: Event[];
}

class EventDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      event: this.getEventFromUrl(),
      upcomingEvents: this.filterOutUpcomingEvents(),
    };
  }

  componentDidUpdate() {
    const key = this.state.event.title.replace(/\s/g, "") + this.state.event.date.replace(/\./g, "-")
    if (key != window.location.pathname.split("/")[2]) {
      this.setState({
        event: this.getEventFromUrl(),
        upcomingEvents: this.filterOutUpcomingEvents(),
      });
    }
  }

  getEventFromUrl(): Event {
    const allEvents = DataFunctions.getEvents();
    const searchKey = window.location.pathname.split("/")[2];
    let foundEvent: Event = new Event("Event Not Found", new Date().toString(), "Event Not Found",
      "Event Not Found", "Event Not Found", "Event Not Found", [], "Event Not Found", "Event Not Found", "Event Not Found", "Event Not Found");
    allEvents.forEach(a => {
      const key = a.title.replace(/\s/g, "") + a.date.replace(/\./g, "-")
      if (key === searchKey) {
        foundEvent = a;
      }
    })
    return foundEvent;
  }

  filterOutUpcomingEvents(): Event[] {
    let upcomingEvents: Event[] = DataFunctions.getUpcomingEvents();
    const currentEvent: Event = this.getEventFromUrl();
    upcomingEvents = upcomingEvents.filter(e => e.eventlink !== currentEvent.eventlink);
    return upcomingEvents;
  }

  render() {
    return (
      <div className="page-bg">
        <section style={{ backgroundImage: `url(${require("../img/eventposters/" + this.state.event.bgimg)})` }} className="eventSection padding-top">
          <div className="container-16">
            <EventHighlight
              event={this.state.event}
            />
          </div>
        </section>
        <section>
          <div className="container-16">
            {this.state.upcomingEvents.length !== 0 ?
              <div>
                <h2>Upcoming Events</h2>
                <div className="grid">
                  {this.state.upcomingEvents.map((x, i) => (
                    <Link className="remove-decoration" to={"/events/" + x.title.replace(/\s/g, "") + x.date.replace(/\./g, "-")}>
                      <EventTile
                        key={i}
                        event={x}
                      />
                    </Link>
                  ))}
                </div>
              </div> : null}
          </div>
        </section>
      </div>
    );
  }
}

export default EventDetails;