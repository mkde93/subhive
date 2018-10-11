import * as React from "react";
import "./css/Hello.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export interface Props {
	name: string;
}

class Hello extends React.Component<Props> {
	componentDidMount() {
		console.log("hest");
	}

	render() {
		return (
			<div className="hello">
				<div className="greeting">
					Hello {this.props.name}
					<Button label={this.props.name} link={"/"}/>
				</div>
				<Link to="/foo" className="link">HEST</Link>
			</div>
		);
	}
}

export default Hello;
