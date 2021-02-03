import React, { Component } from 'react';
import logo from '../../images/cardealLogo.png';
import '../../auth.css'
import { Link } from 'react-router-dom'


class Register extends Component {
    state = {
        password: '',
        confirmPassword: '',
        passwordConfirmText: '',
        color: 'red',
        buttonEnable: true,
        errors: [],
        loading: false
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        
    };
    done = () => {
        console.log('done')
    }
    isFormEmpty = ({ username, nameAndSurname, address, email, phone, password, confirmPassword }) => {
        return !username.length || !nameAndSurname.length || !address.length || !email.length || !phone.length || !password.length || !confirmPassword.length
    }
    isPasswordValid = () => {
        if (this.state.password.length < 6 || this.state.confirmPassword.length < 6)
            return true;
        else if (this.state.password !== this.state.confirmPassword)
            return true;
        else
            return false;
    }
    isFormValid = () => {
        let errors = [];
        let error;
        if (this.isFormEmpty(this.state)) {
            error = { message: 'Fill in all fields!' }
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (this.isPasswordValid(this.state)) {
            error = { message: 'Password is not valid!' }
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else {
            console.log('User Registered!')
            return true;
        }

    }
    displayErrors = error => {
        return error.map((error, i) => <p key={i}>{error.message}</p>)
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value,
        });
    };
    handleConfirmPassword = event => {
        this.setState({
            confirmPassword: event.target.value,
        });
        if (this.state.password === event.target.value){
            this.setState({
                buttonEnable: false,
                passwordConfirmText: ''
            });
        }
        if (this.state.password !== event.target.value){
            this.setState({
                buttonEnable: true,
                passwordConfirmText: 'Password does not match!',
                color: 'red'
            });
        }
    };

    
    render() {
        const { username, nameAndSurname, address, email, phone, password, confirmPassword } = this.state;
        return (
        
        <div className='container card-auth card-border'>
            <div className="card-body-auth">
                <h1 className='App card-title logo-padding'><img src={logo} alt='hub shortcut' /></h1>
                <h6 className='register' >Register </h6>
            </div>
                <form action="http://localhost/car-dealing-rest-API/api/user/signUp.php" method='post' >
                    <div className='form-group' >
                        <input required value={username} name="username" onChange={this.handleChange} type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder='Enter username' />
                        <input required value={nameAndSurname} name="nameAndSurname" onChange={this.handleChange} type="text" className="form-control" id="exampleInputNameAndSurname1" aria-describedby="nameAndSurnameHelp" placeholder='Enter name and surname' />
                        <input required value={address} name="address" onChange={this.handleChange} type="text" className="form-control" id="exampleInputAddress1" aria-describedby="addressHelp" placeholder='Enter address' />
                        <input required value={phone} name="phone" onChange={this.handleChange} type="number" className="form-control" id="exampleInputPhone1" aria-describedby="phoneHelp" placeholder='Enter phone' />
                        <input required value={email} name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email' />
                        <input required value={password} name="password" onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password"></input>
                        <input required value={confirmPassword} name="confirmPassword" onChange={this.handleConfirmPassword} type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm password"></input>
                        <span style={{color: this.state.color}}> {this.state.passwordConfirmText} </span>
                        <button disabled={this.state.buttonEnable} className={this.state.loading ? 'loading' : ''} type="submit" className="btn btn-primary-auth btn-block register-white">Register</button>
                    </div>
                    {this.state.errors.length > 0 && (
                        <div className="alert alert-danger alert-manual" role="alert">
                            {this.displayErrors(this.state.errors)}
                        </div>)}
                    <hr className="hr"/>
            </form>
            <div className='App'><p className="inline-block text-muted">Already a user? </p><Link to="/login" className="card-link">Login</Link></div>

        </div>
    )
  }
}
const mapStateFromProps = state => ({
    isLoading: state.user.isLoading
    
});
export default Register;
 