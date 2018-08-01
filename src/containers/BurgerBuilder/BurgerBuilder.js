import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {...}
  //}
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState(ingredients){

    const sum = Object.keys(ingredients) // converts the object into an array
        .map(igKey => {
              return ingredients[igKey];
        })
        .reduce((sum, el) => { // reduce here is to sum the elements in the array and NOT to flatten
              return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0})
    }; // maps the array of strings into an array that we need

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);


  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
      if (oldCount <=0 ) {
        return;
      }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);

  }

  render() {
    const disabledInfo = {
        ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    // {salad: false, meat: false; cheese: false, bacon: false ...}
    return(
      <Aux>
          <Modal>
              <OrderSummary ingredients={this.state.ingredients} />
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              purchasable={this.state.purchasable}
              price={this.state.totalPrice} />

      </Aux>
    );
  }
}

export default BurgerBuilder;
