import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// const controls = [
//     { label: 'Salad', type: 'salad'},
//     { label: 'Bacon', type: 'bacon'},
//     { label: 'Meat', type: 'meat'},
//     { label: 'Cheese', type: 'cheese'}
// ];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Current Price: <strong>Rs. {props.price}</strong> </p>
        {Object.keys(props.ingredients).map(control => (
            <BuildControl 
                added={() => props.ingredientAdded(control)} 
                remove={() => props.ingredientRemoved(control)} 
                disabledInfo={props.disabledInfo[control]} 
                key={control} 
                label={control.charAt(0).toUpperCase() + control.slice(1)}></BuildControl>
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.placeOrderButton}
            onClick={props.orderPlaced} > PLACE ORDER </button>
    </div>
)

export default buildControls;