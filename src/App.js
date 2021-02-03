import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectCar from './components/SelectCar'
import ShowCars from './components/ShowCars'
import Insert from './components/Insert-Update/Insert'
import Update from "./components/Insert-Update/Update";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register"
import CarDetail from "./components/CarDetail";
import {Route, Switch} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// import Navigation from './components/Navigation';


export default class App extends Component {

    render() {
        // if(this.state.loading)
        //   return <React.Fragment>Loading...</React.Fragment>
        // console.log(this.state.data);

        return (
                <Router>
                    <Switch>
                        <Route path="/cars/:make/:model/:price/:year" component={ShowCars} />
                        <Route path="/addNewCar" component={Insert} />
                        <Route path="/updateCar" component={Update} />
                        <Route path="/login" component={LogIn} />
                        <Route path="/register" component={Register} />
                        <Route path="/car/:id" component={CarDetail} />
                        <Route exact path="/">
                            <div cstyle={{ textAlign: "center"}}>
                              <SelectCar />
                            </div>
                        </Route>
                    </Switch>
                </Router>       
        )
    }
}

