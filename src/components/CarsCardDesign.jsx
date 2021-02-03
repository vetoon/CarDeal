import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default class CarsCardDesign extends Component {
    url="/car/"+this.props.id;

    render() {
        return(
        <div className="container">
            <Link className="no-decoration" to={this.url}>
                    
            <div className="card card-my" style={{ padding: 20 }}>
                <div className="row">

                    {/*CAR INFO*/}
                    <div className="col-lg-8">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6" style={{ textAlign: "center" }}>
                                    <h1><span className="badge badge-light">{this.props.make} {this.props.model}</span></h1>
                                </div>
                                <div className="col-lg-6" style={{ textAlign: "center" }}>
                                    <h1><span className="badge badge-warning orange-style">Cmimi:  {this.props.price}€ </span></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12" style={{ textAlign: "center" }}>
                                    <div className="alert alert-info" role="alert">
                                        <p className="card-text">{this.props.description}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mileage</th>
                                            <th scope="col">Power</th>
                                            <th scope="col">Fuel</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Seller</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">{this.props.mileage} Km</td>
                                            <td scope="row">{this.props.power} Hp</td>
                                            <td scope="row">{this.props.fuel}</td>
                                            <td scope="row">{this.props.date}</td>
                                            <td scope="row">{this.props.username}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>

                        {/*CAR IMAGE*/}
                        
                    <div className="col-lg-4">
                        <img className="card-img img-my" src={this.props.image} alt={this.props.make}
                             onError={(e)=>{e.target.onerror = null; e.target.src=require('../images/cardealLogo.png') }}
                        />
                    </div>
                </div>
            </div>
            <br />
            </Link>
            </div>
        )
    }
}