import * as React from "react";
import {style} from "typestyle";
import { Button } from "@material-ui/core";

class TopBar extends React.Component {
    render() {
        return (
            <div
                className={style({
                    display: "flex",
                    backgroundColor: "lightblue",
                    alignItems: "flex-start",
                    padding: 20,
                    height: 40,
                    justifyContent: "space-between",
                })}
            >
            <Button>En knap</Button>
            <Button>To knap</Button>
            <Button>Tre knap</Button>
            </div>
        );
    }
}


export default TopBar;
