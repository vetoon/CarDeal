import React, { Component } from 'react';
import logo from '../../images/cardeal.png';
import '../../auth.css'
import { Link } from 'react-router-dom'
// import Redirect from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios';


class Login extends Component {
    state = {
        username: "",
        password: "",
        errors: [],
        loading: false,
        error: null
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    done = () => {
        console.log('done')
    }

  isFormValid = ({ username, password }) => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: 'Fill in all fields!' }
      this.setState({ errors: errors.concat(error) });
      return false;
  }
    return username && password;
  }

    isFormEmpty = ({ username, password}) => {
      return !username.length || !password.length;
  }

  displayError = errors => {
    return errors.map((errors, i) => <i key={i}>{errors.message}</i>)
    }

  async handleSubmit(e){
        e.preventDefault();

        const response = await fetch("http://localhost/car-dealing-rest-API/api/user/login.php", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })

      const data = await response.json();
        if(data.length !== 0 ){
            localStorage.setItem('user', JSON.stringify(data));
            this.setState({
                redirect:true
            })
        }
        else
        {
            this.setState({error: 'Incorrect username or password'})
        }
  }
    onSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, property) => (body[property] = value));
        this.doLogin(body, this.props.history);
    };



    doLogin(body, props) {
        axios
            .post('http://localhost/car-dealing-rest-API/api/user/login.php', body)
            .then(res => {
                if (res.data.msg === 'Log in failed') {
                    this.setState({ error: true });
                } else {
                    const cookie = new Cookies();
                    cookie.set('user', JSON.stringify(res.data), { maxAge: 10800 });
                    props.push('/');
                }
            });
    }

    onCookie(){
        let cookie = new Cookies();
        cookie.set('user', { maxAge: 10800 });
    };

    render() {
        return (

        <div className='container card-auth card-border'>
            <div className="card-body">
                <h1 className='App card-title'><img src={logo} height="350px" alt='hub shortcut' /></h1>
            </div>
                <form method="POST" action="http://localhost/car-dealing-rest-API/api/user/login.php"  >
                    <div className='form-group' >
                        <input name="username" onChange={this.handleChange} type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder='Enter username' />
                        <input name="password" onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"></input>
                        <p style={{color: 'red'}}>{this.state.error}</p>
                        <br/>
                        <button disabled={this.state.loading} className={this.state.loading ? 'loading' : ''} type="submit" className="btn btn-primary-auth btn-block" onClick={localStorage.setItem("auth", this.state.username)}>Login</button>
                    </div>
                    {this.state.errors.length > 0 && (
                        <div className="alert alert-danger alert-manual" role="alert">
                            {this.displayError(this.state.errors)}
                        </div>)}
               <hr className="hr"/> 
            </form>
            <div className='App'><p className="inline-block text-muted">Not a user? </p><Link to="/register" className="card-link">Register</Link></div>

        </div>
    )
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
  
});
export default Login;
 