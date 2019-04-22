import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./pages/css/css-reset.css";
import "./index.scss";
import App from "./App";
import Menu from "./components/Menu";
import Music from "./pages/Music";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Artists from "./pages/Artists";
import ArtistDetails from "./pages/ArtistDetails";
import Footer from "./components/Footer";
import MusicDetails from "./pages/MusicDetails";

const history = createBrowserHistory();
ReactDOM.render(
  <Provider>
    <Router history={history}>
      <div>
        <Menu />
        <div id="wrapper">
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/music" component={Music} />
          <Route exact={true} path="/music/:id" component={MusicDetails} />
          <Route exact={true} path="/events" component={Events} />
          <Route exact={true} path="/events/:id" component={EventDetails} />
          <Route exact={true} path="/artists" component={Artists} />
          <Route exact={true} path="/artists/:id" component={ArtistDetails} />
          <Route exact={true} path="/contact" component={Contact} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
