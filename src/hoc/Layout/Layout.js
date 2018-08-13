import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
      this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => { // a clean way of setting a new state that depends on the previous state
      this.setState ((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer};
      });
  }

  render () {
    return (
      <Aux>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>

          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          />

          <main className={classes.Content}>
              {this.props.children}
          </main>
      </Aux>
    )
  }
}

export default Layout;
