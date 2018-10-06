import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./pages/css/css-reset.css";
import "./index.css";
import Menu from "./components/Menu";
import Music from "./pages/Music";
import Events from "./pages/Events";
import Playlist from "./pages/Playlist";
import Contact from "./pages/Contact";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <div>
        <div id="wrapper">
          <Menu />
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/music" component={Music} />
          <Route exact={true} path="/events" component={Events} />
          <Route exact={true} path="/playlist" component={Playlist} />
          <Route exact={true} path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
