import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Foo from "./pages/Foo";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import "typeface-roboto";
import { style } from "typestyle";
import Sidebar from "./bars/Sidebar";
import TopBar from "./bars/TopBar";

const history = createBrowserHistory();

ReactDOM.render(
	<Provider>
		<Router history={history}>
			<div>
				<div
					className={style({
						display: "flex",
						flexDirection: "row",
					})}
				>
				<Sidebar/>
					<div
						className={style({
							display: "flex",
							flexDirection: "column",
							flexGrow: 1,
						})}
					>
						<TopBar/>
						<Route exact={true} path="/" component={App} />
						<Route exact={true} path="/foo" component={Foo} />
					</div>
				</div>
			</div>
		</Router>
	</Provider>,
	document.getElementById("root") as HTMLElement,
);
