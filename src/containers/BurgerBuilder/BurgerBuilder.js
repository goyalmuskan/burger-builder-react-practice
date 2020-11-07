import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        ingredients: null,
        totalPrice: 10,
        placeOrder: false,
        orderNow: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://react-my-burger-builder-a533d.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
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

    purchaseCancelHandler = () => {
        this.setState({orderNow: false})
    }
    
    purchaseContinueHandler = () => {
        // alert('You continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Muskan Goyal',
                age: '19'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order) // firebase
            .then(response => {
                this.setState({loading: false, orderNow: false});
            })
            .catch(error => {
                this.setState({loading: false, orderNow: false});
            });   
    }

    render() {
        const disabledInfo =  {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;            
        }

        let orderSummary = null;

        let burger = this.state.error ? <p> Ingredients can't be loaded... </p> : <Spinner />

        if(this.state.ingredients) {
            burger = (
                <Aux>
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

            orderSummary = 
                <OrderSummary 
                ingredients={this.state.ingredients}  
                cancel={this.purchaseCancelHandler} 
                purchaseContinue={this.purchaseContinueHandler} 
                price={this.state.totalPrice} />
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.orderNow} modalClosed={this.purchaseCancelHandler} > 
                    {orderSummary}
                </Modal>
                {burger}                  
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);