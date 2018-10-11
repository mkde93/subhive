import * as React from "react";
import "./App.css";
import SectionAlbum from "./components/SectionAlbum"

export interface Props {

}


class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <SectionAlbum />
      </div>
    );
  }
}

export default App;
