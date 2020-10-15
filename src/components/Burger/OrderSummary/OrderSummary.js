import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary =  Object.keys(props.ingredients).map( ingredient => {
        return <li key={ingredient}> <span style={{textTransform: 'capitalize'}}> {ingredient}</span>: {props.ingredients[ingredient]} </li>;
    })
    return (
        <Aux>
            <h3> Your Order Summary :</h3>
            <p> Your customised delicious burger has the following chosen ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to checkout </p>
        </Aux>
    )
};

export default orderSummary;