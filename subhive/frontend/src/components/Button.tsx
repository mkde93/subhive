import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {
  label: string;
  link: string;
}

class Button extends React.Component<Props> {
  render() {
    return (
      <div className="button">
        <Link to={this.props.link}>{this.props.label}</Link>
      </div>
    );
  }
}

export default Button;
