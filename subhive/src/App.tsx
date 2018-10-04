import * as React from "react";
import "./App.css";
import Hello from "./pages/Hello";
import { Button } from "@material-ui/core";

export interface Props {
	name: string;
}

export interface State {
	name: string;
}

class App extends React.Component<Props, State> {
	componentWillMount() {
		this.state = {
			name: "marc", 
		};
	}

	buttonOnClick = (input: string) => {
		this.setState({
			name: input,
		});
	}

	calculate = (x: number, y: number): number => {
		let result: number;
		result = x + y;
		return result;
	}

	render() {
		return (
			<div>
				<Button onClick={() => {this.buttonOnClick("franz"); }}>Franz</Button>
				<Button onClick={() => {this.buttonOnClick("marc"); }}>Marc</Button>
				<Hello name={this.state.name}/>
			</div>
			);
		}
	}

export default App;
