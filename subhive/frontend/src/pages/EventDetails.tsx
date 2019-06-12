import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "../components/EventHighlight";
import EventTile from "../components/EventTile";
import { Link } from "react-router-dom";
import history from '../history'
import axios from "axios";
import APIs from "../APIs";

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
      event: new Event("Event Not Found", new Date().toString(), "Event Not Found",
        "Event Not Found", "Event Not Found", "Event Not Found", [], "Event Not Found", "Event Not Found", "Event Not Found", "Event Not Found"),
      upcomingEvents: [],
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getEventsApi()])
      .then(axios.spread((artists, events) => {
        const allEvents = DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data));
        this.setState({
          event: this.getEventFromUrl(allEvents),
          upcomingEvents: this.filterOutUpcomingEvents(allEvents),
        });
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
  }

  componentDidUpdate() {
    const key = this.state.event.title.replace(/\s/g, "").replace(/\//g, "") + this.state.event.date.replace(/\./g, "-");
    if (key != window.location.pathname.split("/")[2]) {
      axios.all([this.getArtistApi(), this.getEventsApi()])
      .then(axios.spread((artists, events) => {
        const allEvents = DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data));
        this.setState({
          event: this.getEventFromUrl(allEvents),
          upcomingEvents: this.filterOutUpcomingEvents(allEvents),
        });
      }))
      .catch((error) => {
        history.push('/')
        window.location.reload();
      });
    }
  }

  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getEventsApi() {
    return axios.get(APIs.apis.eventlist);
  }

  getEventFromUrl(data: Event[]): Event {
    const searchKey = window.location.pathname.split("/")[2];
    let foundEvent: Event = new Event("Event Not Found", new Date().toString(), "Event Not Found",
      "Event Not Found", "Event Not Found", "Event Not Found", [], "Event Not Found", "Event Not Found", "Event Not Found", "Event Not Found");
    data.forEach(a => {
      const key = a.title.replace(/\s/g, "").replace(/\//g, "") + a.date.replace(/\./g, "-")
      if (key === searchKey) {
        foundEvent = a;
      }
    })
    return foundEvent;
  }

  filterOutUpcomingEvents(data: Event[]): Event[] {
    let upcomingEvents: Event[] = data.filter(e => DataFunctions.toDate(e.date) > new Date());
    const currentEvent: Event = this.getEventFromUrl(data);
    upcomingEvents = upcomingEvents.filter(e => e.eventlink !== currentEvent.eventlink);
    return upcomingEvents;
  }

  render() {
    return (
      <div className="page-bg">
        <section style={{ backgroundImage: `url(${this.state.event.bgimg})` }} className="eventSection padding-top">
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