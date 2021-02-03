import React, {Component} from 'react';

class Update extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const url=`http://localhost/car-dealing-rest-API/api/post/updateCar.php`

        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ data: json.data}));
    }

    updateCar = () =>{
        return(
            <form action="http://localhost/car-dealing-rest-API/api/post/updateCar.php" method="POST" style={{padding: 50}}>
                <div className="row">
                    <div className="col-md-6" style={{padding: 15}}>
                        <input name="vehicleid" type="text" className="form-control" placeholder="id" />
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
    showContent = () => {
        if (this.state.data.isUpdated === 'T'){
            return (
                <div> updated </div>
            )
        }
        else if (this.state.data.isUpdated === 'F')
        {
            return (
                <div> is not updated </div>
            )
        }
        else
        {
            return (
                this.updateCar()
            )
        }
    }

    render() {
        return (
            <div>
                {this.showContent()}
                {console.log(this.state.data)}
            </div>
        );
    }
}

export default Update;