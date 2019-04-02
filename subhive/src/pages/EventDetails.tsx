import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "../components/EventHighlight";
import Footer from "../components/Footer";

export interface Props {
}

export interface State {
  event: Event;
}

class EventDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getEventFromUrl();
    this.state = {
      event: this.getEventFromUrl(),
    };
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
        <Footer />
      </div>
    );
  }
}

export default EventDetails;