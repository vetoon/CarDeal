import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import '../details.css'
import '../payment.css'

class CarDetailDesign extends Component {
    state = {
        showPayment: false
    }
    getHp = (power) => {
        return power * 1.61;
    }
    showContent = ()=>{
        if (this.state.showPayment === false){
            return(
                <div className='row details-page container'>
                    <div className='col container details-design-firstpart'>
                        <div className="details-img-place">
                            <img className="img-fluid img-size" src={this.props.image} alt={this.props.make}
                                 onError={(e)=>{e.target.onerror = null; e.target.src=require('../images/cardealLogo.png') }}
                            />
                            {/* <ul></ul>
                            <h5>Author</h5>
                            <li>Email: {this.props.email}</li>
                            <li>username: {this.props.username}</li>
                            <li>Name:  {this.props.name}</li>
                        <li>Address: {this.props.address}</li> */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>{this.props.make}  {this.props.model}</h1>
                            </div>
                            {/*<div className="col-md-6">*/}
                            {/*    <button onClick={()=>{this.setState({showPayment: true})}} className="btn btn-primary btn-block btn-lg">Bleje Tani</button>*/}
                            {/*</div>*/}
                        </div>
                        <h3 className="my-3 project-title">Të dhënat:</h3>
                        <br />
                        <h5> {this.props.description} <br/><br/></h5>
                        <ul>
                            <li><b>Regjistruar më:&nbsp;</b> <span>{this.props.registration}</span> </li>
                            <li><b>Kilometra:&nbsp;</b><span>{this.props.mileage}</span></li>
                            <li><b>Çmimi:&nbsp;</b><span>{this.props.price} $</span></li>
                            <li><b>Fuqia:&nbsp;</b><span>{this.props.power} KW</span></li>
                            {/* </span></li><li><b>Horse Power:&nbsp;</b><span>{this.getHp} HP</span></li> */}
                            <li><b>Derivati:&nbsp;</b><span>{this.props.fuel}</span></li>

                        </ul>
                        <div className="row">

                        </div>
                        <div className="row">
                            <button onClick={this.goBack} className='btn back-button btn-primary'>Shko Pas</button>
                        </div>
                    </div>

                </div>
            )
        }
        if (this.state.showPayment === true){
            return (
                <form method="POST" action="http://localhost/car-dealing-rest-API/api/post/payment.php">
                    <div className="container payment_container">
                        <div className="row">
                            <input name="cc_number" type="number" className="form-control" placeholder="CCN" required />
                        </div>
                        <div className="row">
                            <input name="expiration" type="text" className="form-control" placeholder="Data e skadimit" required />
                        </div>
                        <div className="row">
                            <input name="cvv" type="number" className="form-control" placeholder="Numri i cc" required />
                        </div>
                        <div className="row">
                            <input hidden name="price" type="number" className="form-control" value={this.props.price} required />
                        </div>
                        <div className="row">
                            <button type="submit" className="btn btn-outline-success btn-block btn-lg" > Paguaj Tani </button>
                        </div>
                    </div>
                </form>
            )
        }
    }
    goBack=()=> {
        window.history.back();
      }
    render() {
        return (
            <div>
                {this.showContent()}
            </div>
      )
    }
}

export default CarDetailDesign;