import React, { Component } from 'react';
import logo from '../images/cardeal.png';
// import { Link } from 'react-router-dom'
// import Cookies from 'universal-cookie';
import "../App.css"

 class Navigation extends Component {
    nav = () =>{
        // let username = Cookies.get('user');
        return(
            <nav className="navbar fix-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} height="40" width="50"alt=""/></a>  Car Deal
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className=" float-righta collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="">{localStorage.getItem("auth")}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/addNewCar">Shto veture</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Kyçu</a>
                </li>
                 <form method="POST" action="http://localhost/car-dealing-rest-API/api/user/logOut.php">
                    <button className="btn btn-info" type="submit" /*onSubmit={localStorage.clear()*/>Shkyçu</button>
                 </form>
              </ul>
            </div>
            </div>
          </nav>
        )
    }
    render() {
        return (
            <div>
                {this.nav()}
            </div>
        );
    }
}

export default Navigation;