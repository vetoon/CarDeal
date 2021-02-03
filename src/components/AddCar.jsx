import React, { Component } from 'react'

export default class AddCar extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost/rest-api/Cars/addCar.php" method="post">
                    Cid: <input id="cid" name="cid" /> <br />
                    Make: <input id="make" name="make" /><br />
                    Model: <input id="model" name="model"/><br />
                    Price: <input id="price" name="price" /><br />
                    Year: <input id="year" name="year" /><br />
                    Color: <input id="color" name="color" />
                    <button type="submit"> Add Car </button>
                </form> 
            </div>
        )
    }
}
