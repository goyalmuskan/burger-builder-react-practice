import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

// Global Constants
const INGREDIENT_PRICE = {
    salad: 10,
    cheese: 30,
    bacon: 20,
    meat: 20
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
            // lettuce : 0
        },
        totalPrice: 10,
        placeOrder: false,
        orderNow: false
    }

    updatePlaceOrderState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients).map( item => {
            return ingredients[item];
        })
        .reduce((sumTotal, element) => {
            return sumTotal + element;
        }, 0);
        this.setState({placeOrder: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdded = INGREDIENT_PRICE[type];
        const newPrice = priceAdded + this.state.totalPrice;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePlaceOrderState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount === 0) return;
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceDeducted = INGREDIENT_PRICE[type];
        const newPrice = this.state.totalPrice - priceDeducted;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePlaceOrderState(updatedIngredients);
    }

    purchaseHandler = () => this.setState({orderNow: true});

    render() {
        const disabledInfo =  {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;            
        };

        return (
            <Aux>
                <Modal 
                    show={this.state.orderNow} 
                    ingredients={this.state.ingredients} />
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice} 
                    disabledInfo={disabledInfo} 
                    ingredients={this.state.ingredients}
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    orderPlaced={this.purchaseHandler} 
                    placeOrderButton={this.state.placeOrder}/>                    
            </Aux>
        );
    }
}

export default BurgerBuilder;