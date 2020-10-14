import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let ingredientsArray = Object.keys(props.ingredients); // converts object into array of strings of keys eg, salad, bacon, etc.
    ingredientsArray = ingredientsArray.map(ingreKey => { // ingreKey represents salad, bacon, etc.

        // Array with empty spaces equal to number of spaces required by each ingreKey
        return [...Array(props.ingredients[ingreKey])].map((_, index) => { 
            // console.log(props.ingredients[ingreKey]);
            return <BurgerIngredient key={ingreKey + index} type={ingreKey} />
        }); 
    })
     // flattening the array
     .reduce((prevArr, currArr) => {
         return prevArr.concat(currArr);
     }, []); // array is empty or has JSX elements
    
    if(ingredientsArray.length === 0) {
        ingredientsArray = <p> Please start adding Ingredients.</p>
    }
    // console.log(ingredientsArray);
    return (
        <div className={classes.Burger}> 
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;