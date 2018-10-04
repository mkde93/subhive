import * as React from "react";
import "../index.css";
import Button from "../components/Button";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Button label="svamp" link="/" />
        <Button label="skede" link="/foo" />
      </div>
    );
  }
}

export default Menu;
