import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import CardDetailDesign from './CarDetailDesign'
import Navigation from './Navigation'
class CarDetail extends Component {
    state ={
        data: [],
        url:'',
        update: false
    };

    componentDidMount() {
        //kjo o url-ja jem, ju bonja urln tuj g vu bohet run rest api.
        const id = this.props.match.params.id;
        
        const url = `http://localhost/car-dealing-rest-API/api/get/read.php?id=${id}`;
        this.setState({
            url: url
        });

        console.log(this.url);
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ data: json.data })); }

        showContent = () =>{
            if(this.state.update === false){
                return (
                    <div>
                        <Navigation />
                        {this.state.data.map((car =>
                                <CardDetailDesign
                                    key={car.vehicleID}
                                    make={car.make}
                                    model={car.model}
                                    registration={car.date}
                                    mileage={car.mileage}
                                    fuel={car.fuel}
                                    power={car.power}
                                    image={car.image}
                                    description={car.description}
                                    price={car.price}
                                />
                        ))}
                        <center>
                            <div className="row">
                                <div className="col-6" style={{textAlign: 'center'}}>
                                    <button className="btn btn-info btn-lg" onClick={()=>{this.setState({update: true})}}> Ndrysho </button>
                                </div>
                                <div className="col-6" style={{textAlign: 'center'}}>
                                    <form method="POST" action="http://localhost/car-dealing-rest-API/api/post/deleteCar.php">
                                        <input hidden name="vehicleid"  type="text" defaultValue={this.state.data.map((car => car.vehicleID ))} />
                                        <button className="btn btn-danger btn-lg"> Fshij </button>
                                    </form>
                                </div>
                            </div>
                        </center>
                    </div>
                )
            }
            else {
                return(
                    <form action="http://localhost/car-dealing-rest-API/api/post/updateCar.php" method="POST" style={{padding: 50}}>
                        <div className="row">

                            <div className="col-md-6" style={{padding: 15}}>
                                <input hidden name="vehicleid"  type="text" className="form-control" value={this.state.data.map((car => car.vehicleID ))} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="make" type="text" className="form-control" placeholder="MAKE" />
                            </div>
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="model" type="text" className="form-control" placeholder="MODEL" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="description" type="text" className="form-control" placeholder="DESCRIPTION" />
                            </div>
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="fuel" type="text" className="form-control" placeholder="FUEL" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="image" type="text" className="form-control" placeholder="Picture URL" />
                            </div>
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="price" type="number" className="form-control" placeholder="PRICE" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="power" type="number" className="form-control" placeholder="POWER" />
                            </div>
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="mileage" type="number" className="form-control" placeholder="MILEAGE" />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="date" type="text" className="form-control" placeholder="DATE" />
                            </div>
                            <div className="col-md-6" style={{padding: 15}}>
                                <input name="username" type="text" className="form-control" placeholder="USERNAME: " disabled={false}/>
                            </div>
                        </div>
                        <div className="container" style={{textAlign: "center", padding: 15}}>
                            <button type="submit" className="btn btn-info btn-block"> UPDATE </button>
                        </div>
                    </form>
                )
            }
        }
    render() {
        console.log(this.state.data)
        return (
            <React.Fragment>
                {this.showContent()}
            </React.Fragment>
            )
        }

}

export default CarDetail;