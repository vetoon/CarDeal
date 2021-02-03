import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Navigation from "./Navigation";
export default class SelectCar extends Component {

    state = {
        // car_makes is used in order to have unique makes (DISTINCT, no-repetition)
        car_makes: [],
        // all makes and models
        allData: [],
        //store the selected make from the user
        selected_make: 'all',
        selected_model: 'all',
        disableModel: true,
        selected_price: 5000000.0,
        selected_year: 2020
    }

    componentDidMount() {
    fetch(`http://localhost/car-dealing-rest-API/api/search/read.php`)
        .then(res => res.json())
        .then(res => this.setState({ car_makes: res.data }));

    }
    componentDidUpdate() {
            fetch(`http://localhost/car-dealing-rest-API/api/get/read.php?make=${this.state.selected_make}`)
                .then(res => res.json())
                .then(res => this.setState({ allData: res.data }));
                }
                onSelectMake = (event) => {
                this.setState({selected_make: event.target.value, disableModel: false})
                };

    onSelectModel = (event) => {
        this.setState({selected_model: event.target.value})
    };
    onSelectPrice = (event) => {
        this.setState({selected_price: event.target.value})
    };
    onSelectYear = (event) => {
        this.setState({selected_year: event.target.value})
    };

    selectMake = () =>{
        return(
            <select className="form-control" defaultValue="" name="make" onChange={this.onSelectMake} required>
                <option hidden>Tipi</option>
                {this.state.car_makes.map((car) =>
                    <option key={car.make} value={car.make}>{car.make}</option>
                )}
            </select>
        )
    };
    distinctModels = () => {
      return [...new Set(this.state.allData.map(car => car.model))];
    };
    selectModel = () => {
            return (
                <select className="form-control"
                        disabled={this.state.disableModel}
                        defaultValue="" name="model"
                        onChange={this.onSelectModel} >
                    <option hidden>Modeli</option>
                    {/* eslint-disable-next-line array-callback-return */}
                    {
                       this.distinctModels().map((value)=>
                           <option key={value} value={value}>
                               {value}</option>
                       )
                    }
                </select>
            )
    };
    selectPrice = () =>{
        return(
            <select className="form-control" defaultValue="" name="price" onChange={this.onSelectPrice} >
                <option hidden>Cmimi</option>
                <option value={500}> 500$ </option>
                <option value={5000}> 5000$ </option>
                <option value={10000}> 10000$ </option>
                <option value={20000}> 20000$ </option>
                <option value={30000}> 30000$ </option>
                <option value={40000}> 40000$ </option>
                <option value={50000}> 50000$ </option>
                <option value={100000}> 100000$ </option>
            </select>
        )
    }
    selectYear = () =>{
        return(
            <select className="form-control" defaultValue="" name="year" onChange={this.onSelectYear} >
                <option hidden>Viti</option>
                <option value={2000}> 2000 </option>
                <option value={2005}> 2005 </option>
                <option value={2010}> 2010 </option>
                <option value={2013}> 2013 </option>
                <option value={2015}> 2015 </option>
                <option value={2017}> 2017 </option>
                <option value={new Date().getFullYear()}> {new Date().getFullYear()} </option>
            </select>
        )
    }

    selectCarForm(){
        return (
            <form style={{ width: 400, padding: 20 }}>
                <div className=" card-border-search container">
                    <div className="row">
                    <h6 style={{paddingLeft: 50}}/>
                    </div>
                    <div className="row">
                       
                        <div className="col-6" style={{padding: 10}}>
                            {/* SELECT MAKE */}
                            {this.selectMake()}
                        </div>
                        <div className="col-6" style={{padding: 10}}>
                            {/*SELECT MODEL*/}
                            {this.selectModel()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" style={{padding: 10}}>
                            {/*SELECT PRICE*/}
                            {this.selectPrice()}
                        </div>
                        <div className="col-6" style={{padding: 10}}>
                            {/*SELECT YEAR*/}
                            {this.selectYear()}
                        </div>
                    </div>
                    <div className="row" style={{padding: 10}}>
                        <Link to={`/cars/${this.state.selected_make}/${this.state.selected_model}/${this.state.selected_price}/${this.state.selected_year}`} > <button className="btn search-button btn-primary">Kerko</button> </Link>
                    </div>
                </div>
                </form>
                
        );
      }
    render() {
        return (
            <div> 
                <Navigation />
                <div className="bg-pic">
                    {this.selectCarForm()}
                </div>
                
            </div>
        )
    }
}
