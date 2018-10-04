import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Foo from "./pages/Foo";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import "typeface-roboto";
import Menu from "./bars/Menu";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <div>
        <div id="wrapper">
          <Menu />
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/foo" component={Foo} />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
