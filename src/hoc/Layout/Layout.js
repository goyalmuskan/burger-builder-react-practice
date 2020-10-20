import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components//Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        visibleSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({visibleSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { visibleSideDrawer: !prevState.visibleSideDrawer };
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.visibleSideDrawer} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;