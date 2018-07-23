import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {...}
  //}
  state = {
    ingredients: {
      salad: 3,
      bacon: 3,
      cheese: 3,
      meat: 4
    }
  }
  render() {
    return(
      <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
