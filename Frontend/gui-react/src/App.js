import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import {Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Chat from "./components/Chat";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login"

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Default}/>
                </Switch>
                <Modal />
            </React.Fragment>


        );
    }
}

export default App;
