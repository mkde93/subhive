import * as React from "react";
import "./css/Hello.css";
import { Link } from "react-router-dom";

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
				</div>
				<Link to="/foo" className="link">HEST</Link>
			</div>
		);
	}
}

export default Hello;
