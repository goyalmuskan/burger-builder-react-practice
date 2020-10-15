import React from 'react';
import classes from './Modal.module.css';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const modal = (props) => (
    <div style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
        }} 
        className={classes.Modal}>
        {props.children}
        <OrderSummary ingredients={props.ingredients}/>
    </div>
);

export default modal;