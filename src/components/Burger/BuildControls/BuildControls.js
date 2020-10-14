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
        {Object.keys(props.ingredients).map(control => (
            <BuildControl key={control} label={control.charAt(0).toUpperCase() + control.slice(1)}></BuildControl>
        ))}
    </div>
)

export default buildControls;