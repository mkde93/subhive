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
}

class SectionEvent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      event: new Event("Event Not Found", new Date().toString(), "Event Not Found",
        "Event Not Found", "Event Not Found", "Event Not Found", [], "Event Not Found", "Event Not Found", "Event Not Found", "Event Not Found"),
    };
  }


  componentWillMount() {
    axios.all([this.getArtistApi(), this.getEventsApi()])
      .then(axios.spread((artists, events) => {
        this.setState({
          event: DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data))[0],
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

  render() {
    return (
      <div>
        {this.props.frontpage !== true ?
          <section style={{ backgroundImage: `url(${this.state.event.bgimg})` }} className="eventSection padding-top">
            {this.state.event.title === "Event Not Found" ? <CircularProgress /> :
              <div className="container-16">
                <EventHighlight
                  event={this.state.event}
                />
              </div>}
          </section> :
          <section style={{ backgroundImage: `url(${this.state.event.bgimg})` }} className="eventSection">
            {this.state.event.title === "Event Not Found" ? <CircularProgress /> :
              <div className="container-16">
                <EventHighlight
                  event={this.state.event}
                />
              </div>}
          </section>
        }
      </div>
    );
  }
}
export default SectionEvent;