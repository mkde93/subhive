import * as React from "react";
import Event from "../types/Event";
import DataFunctions from "../util/DataFunctions";
import EventHighlight from "./EventHighlight";

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
      event: DataFunctions.getEvents()[0],
    };
  }

  render() {
    return (
      <div>
        {this.props.frontpage !== true ?
          <section style={{ backgroundImage: `url(${require("../img/eventposters/" + this.state.event.bgimg)})` }} className="eventSection padding-top">
            <div className="container-16">
              <EventHighlight
                event={this.state.event}
              />
            </div>
          </section> :
          <section style={{ backgroundImage: `url(${require("../img/eventposters/" + this.state.event.bgimg)})` }} className="eventSection">
            <div className="container-16">
              <EventHighlight
                event={this.state.event}
              />
            </div>
          </section>
        }
      </div>
    );
  }
}
export default SectionEvent;