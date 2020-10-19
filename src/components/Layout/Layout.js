import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {

    return (
        <Aux>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>)
};

export default layout;