import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// transformed objects into an array using the Object.keys and mapping through the array
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
      .map( igKey => {
          return [...Array(props.ingredients[ igKey ])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
          //  console.log(BurgerIngredient)
          });
      })
/* .reduce() flattens the above inner arrays into into one array
   by pulling out the values of the inner arrays and create one array only
   which contains all the values */
      .reduce((arr, el) => {
        return arr.concat(el)
      }, []);
  //    console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
          {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />


    </div>
  );
};

export default burger;
