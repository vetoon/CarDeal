import React, {Component} from 'react';
class Insert extends Component {
    randomInteger(min, max) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(random);
        return random;
    }

    addNewCar = () =>{
        return(
            <form action="http://localhost/car-dealing-rest-API/api/post/addCar.php" method="POST" style={{padding: 50}}>
                <input name="vehicleid" type="hidden" className="hide" value={this.randomInteger(1000000,9999999999999)} />
                <div className="row">
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="make" type="text" className="form-control" placeholder="Tipi" />
                    </div>
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="model" type="text" className="form-control" placeholder="Modeli" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="description" type="text" className="form-control" placeholder="Pershkrim" />
                    </div>
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="fuel" type="text" className="form-control" placeholder="Lloj i vajit" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="image" type="text" className="form-control" placeholder="Foto" />
                    </div>
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="price" type="number" className="form-control" placeholder="Cmimi" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="power" type="number" className="form-control" placeholder="Fuqia" />
                    </div>
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="mileage" type="number" className="form-control" placeholder="Kilometrazhi" />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="date" type="text" className="form-control" placeholder="Data" />
                    </div>
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="username" type="text" className="form-control" placeholder="USERNAME: " disabled={false}/>
                    </div>
                </div>
                <div className="container" style={{textAlign: "center", padding: 15}}>
                    <button type="submit" className="btn btn-success btn-block"> ADD </button>
                </div>
            </form>
        )
    }
    render() {
        return (
            <div>
                {this.addNewCar()}
            </div>
        );
    }
}

export default Insert;