import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";
import "./pages/css/css-reset.css";
import "./index.scss";
import history from './history'
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
import ScrollToTop from "./components/ScrollToTop";
import Live from "./pages/Live";


ReactDOM.render(
  <Provider>
    <Router history={history}>
      <ScrollToTop>
        <div id="footer-always-bottom">
          <Menu />
          <div id="wrapper">
            <Switch>
              <Route exact={true} path="/" component={App} />
              <Route exact={true} path="/music" component={Music} />
              <Route exact={true} path="/music/:id" component={MusicDetails} />
              <Route exact={true} path="/events" component={Events} />
              <Route exact={true} path="/events/:id" component={EventDetails} />
              <Route exact={true} path="/artists" component={Artists} />
              <Route exact={true} path="/artists/:id" component={ArtistDetails} />
              <Route exact={true} path="/contact" component={Contact} />
              <Route exact={true} path="/live" component={Live} />
              <Route path="*" component={App} /> {/* Redirects to frontpage with broken links */}
            </Switch>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
