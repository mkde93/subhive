import * as React from "react";
import { style } from "typestyle";
import { Button } from "@material-ui/core";

class Sidebar extends React.Component {
    render() {
        return (
            <div
                className={style({
                    width: 200,
                    display: "flex",
                    backgroundColor: "lightskyblue",
                    flexDirection: "column",
                    minHeight: "100vh",
                    flexShrink: 0,
                    justifyContent: "space-between",
                })}
            >
                <Button>En knap</Button>
                <Button>To knap</Button>
                <Button>Tre knap</Button>
            </div >
        );
    }
}

export default Sidebar;
