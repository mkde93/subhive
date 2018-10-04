import * as React from "react";
import "./css/Hello.css";
import { Link } from "react-router-dom";

class Foo extends React.Component {
	componentDidMount() {
		console.log("dog");
	}
	render() {
		return (
			<div className="hello">
				<div className="greeting">
					Hello HEST
				</div>
				<Link to="/">HEST2</Link>
			</div>
		);
	}
}

export default Foo;
