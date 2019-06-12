import * as React from "react";
import "./css/grid.css";
import "../index.scss";
import SectionEvent from "../components/SectionEvent";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventTile from "../components/EventTile";
import axios from "axios";
import APIs from "../APIs";
import CircularProgress from '@material-ui/core/CircularProgress';

export interface Props {
}

export interface State {
  events: Event[];
  loading: boolean;
}

class Events extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      events: [],
      loading: true,
    };
  }

  componentWillMount() {
    axios.all([this.getArtistApi(), this.getEventsApi()])
    .then(axios.spread((artists, events) => {
      const allEvents = DataFunctions.createEventsObjects(events.data, DataFunctions.createArtistsObjects(artists.data));
      allEvents.shift();
        this.setState({
          events: allEvents,
          loading: false,
        });
      }))
      .catch((error) => {
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
      <div className="page-bg">
        <SectionEvent frontpage={false} />
        {this.state.loading ? <CircularProgress/> : 
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
        </div>}
      </div>
    );
  }
}

export default Events;