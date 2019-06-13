import * as React from "react";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "./EventHighlight";
import axios from "axios";
import APIs from "../APIs";
import { CircularProgress } from "@material-ui/core";

export interface Props {
  frontpage: boolean;
}

export interface State {
  event: Event;
  loading: boolean;
  hasEventOccured: boolean;
}

class SectionEvent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      event: new Event("Event Not Found", new Date().toString(), "Event Not Found",
        "Event Not Found", "Event Not Found", "Event Not Found", [], "Event Not Found", "Event Not Found", "Event Not Found", "Event Not Found"),
      loading: true,
      hasEventOccured: false,
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getEventsApi()])
      .then(axios.spread((artists, events) => {
        this.setState({
          event: DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data))[0],
          loading: false,
        }, () => {
          this.hasEventBeenHeld();
        });
      }))
      .catch((error) => {
        // handle error
        return [];
      });

  }

  getArtistApi() {
    return axios.get(APIs.apis.artistlist);
  }

  getEventsApi() {
    return axios.get(APIs.apis.eventlist);
  }
  

  hasEventBeenHeld() {
    let eventDate: Date = new Date();
    let currentDate: Date = new Date();
    eventDate.setDate(Number(this.state.event.date.split(".")[0]));
    eventDate.setMonth(Number(this.state.event.date.split(".")[1]) - 1);
    eventDate.setFullYear(Number(this.state.event.date.split(".")[2]));
    if (eventDate < currentDate) {
      this.setState({
        hasEventOccured: false
      });
    } else {
      this.setState({
        hasEventOccured: true
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.frontpage !== true ?
          <section style={{ backgroundImage: `url(${this.state.event.bgimg})` }} className="eventSection padding-top">
            <div className="container-16">
              {this.state.loading ? <CircularProgress /> :
                <EventHighlight
                  event={this.state.event}
                  hasEventOccured={this.state.hasEventOccured}
                />}
            </div>
          </section> :
          <section style={{ backgroundImage: `url(${this.state.event.bgimg})` }} className="eventSection">
            <div className="container-16">
              {this.state.loading ? <CircularProgress /> :
                <EventHighlight
                  event={this.state.event}
                  hasEventOccured={this.state.hasEventOccured}
                />}
            </div>
          </section>
        }
      </div>
    );
  }
}
export default SectionEvent;