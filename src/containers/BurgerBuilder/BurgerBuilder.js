import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 2,
            cheese: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls (Ingredients)</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;