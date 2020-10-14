import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => {
    const style = {
        'textAlign': 'center',
        'padding': '10px'
    }

    return (
        <Aux>
            <div style={style}> Toolbar, SideDrawer, BackDrop </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>)
};

export default layout;