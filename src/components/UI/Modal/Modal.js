import React from 'react';
import classes from './Modal.module.css';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const modal = (props) => (
    <Aux>
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
            }} 
            className={classes.Modal}>
            {props.children}
            <OrderSummary ingredients={props.ingredients}/>
        </div>
        <Backdrop show={props.show} />
    </Aux>
);

export default modal;