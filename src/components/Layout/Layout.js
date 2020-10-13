import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, BackDrop </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;