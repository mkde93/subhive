import * as React from "react";
import history from '../history'
import { withRouter, RouteComponentProps, StaticContext } from 'react-router';

export interface State {

}

class ScrollToTop extends React.Component<RouteComponentProps<{}, StaticContext>, State> {
    componentDidUpdate() {
        history.listen((location, action) => {
            window.scrollTo(0,0);
        });
    }
  
    render() {
        return this.props.children;
    }
  }
  
  export default withRouter(ScrollToTop);