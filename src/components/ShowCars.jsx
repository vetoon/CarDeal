import React, { Component } from 'react';
import CarsDesign from './CarsCardDesign';
import Navigation from './Navigation'
import Pagination from './paginationCar';
import { paginate } from './utilities/paginate';

export default class ShowCars extends Component {
    state ={
        data: [],
        url: '',
        pageSize: 40,
        currentPage:1
    }
    componentDidMount() {

        const make = this.props.match.params.make !== 'all' ? `?make=${this.props.match.params.make}` :'';
        const model = this.props.match.params.model !== 'all' ? `&model=${this.props.match.params.model}` : '';
        const price = model !== '' ? `&price=${this.props.match.params.price}` : '';
        const year = model !== '' ? `&registration=${this.props.match.params.year}-12-01` : '';
        
        
        const url = `http://localhost/car-dealing-rest-API/api/get/read.php${make}${model}${price}${year}`
        this.setState({
            url: url
        })
        console.log(this.url)
        //fetch(`http://localhost/car-api/show_selected_cars.php?make=${this.state.make}&model=${this.state.model}&price=${this.state.price}&year=${this.state.year}`)
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ data: json.data })); }
    
    
    pageChange = page => {
                this.setState({currentPage:page})
            }
    showCars = () => {
        return(
            this.state.data.map((car)=>(
                <CarsDesign
                    make={car.make}
                    model={car.model}
                    description={car.description}
                    price={car.price}
                    image={car.image}
                    id={car.vehicleID}
                    // mileage={car.mileage}
                    // power={car.power}
                    // fuel={car.fuel}
                    // date={car.date}
                    // username={car.username}
                />
            )
            )
        )
    }
    render() {
        console.log("asdsadasd", this.props.match.params)
        console.log("console:::::::", this.url)
        const allCars=paginate(this.state.data,this.state.currentPage,this.state.pageSize)
        return (
            <div>
                <Navigation />
                <br />
                {allCars.map((car) => (
                    <CarsDesign
                        key={car.vehicleID}
                        make={car.make}
                        model={car.model}
                        description={car.description}
                        price={car.price}
                        image={car.image}
                        id={car.vehicleID}
                    // mileage={car.mileage}
                    // power={car.power}
                    // fuel={car.fuel}
                    // date={car.date}
                    // username={car.username}
                    />))}
                <Pagination 
                carCount={this.state.data.length}
                pageSize={this.state.pageSize}
                onPageChange={this.pageChange}
                currentPage={this.state.currentPage} />
            </div>
        )
    }
}