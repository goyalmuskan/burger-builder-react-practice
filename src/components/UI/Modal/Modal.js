import React, { Component } from 'react';
import classes from './Modal.module.css';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        console.log('[Modal] will Update');
    }

    render() {
        return (
            <Aux>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                    }} 
                    className={classes.Modal}>
                    {this.props.children}
                    <OrderSummary ingredients={this.props.ingredients} cancel={this.props.modalClosed} purchaseContinue={this.props.purchaseContinue} price={this.props.price}/>
                </div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}  />
            </Aux>
        )
    }
}

export default Modal;