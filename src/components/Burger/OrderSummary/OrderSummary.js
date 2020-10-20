import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
// import classes from '../../UI/Button/Button.module.css';

class OrderSummary extends Component {

    // this can be changed back to a functional component
    componentDidUpdate() {
        console.log('[OrderSummary] will Update');
    }

    render() {
        const ingredientSummary =  Object.keys(this.props.ingredients).map( ingredient => {
            return <li key={ingredient}> <span style={{textTransform: 'capitalize'}}> {ingredient}</span>: {this.props.ingredients[ingredient]} </li>;
        })
 
        return (
            <Aux>
                <h3> Your Order Summary :</h3>
                <p> Your customised delicious burger has the following chosen ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> Continue to Checkout? </p> 
                <p> Total: <strong>Rs. {this.props.price}/-</strong> </p>
                <Button clicked={this.props.cancel} buttonType="Danger"> CANCEL </Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }   
}

export default OrderSummary;