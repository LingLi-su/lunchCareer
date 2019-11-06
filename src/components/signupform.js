import React, {Component} from 'react';
import {PostData} from './postdata';
import {Redirect} from 'react-router-dom';


class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      redirectToReferrer: false
    }
  }

  onChange(event){
    this.setState({[event.target.name]:event.target.value});
  }
  onSubmit(event){
    event.preventDefault();

}



  render(){
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
    return (<Redirect to={'/'}/>)
    }

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
      <div className ="registration"style={{paddingBottom:'10px'}}><h4>Register</h4></div>
      <div className="form-group">
        <label className="control-label">Username</label>
        <input
          value={this.state.username}
          onChange={this.onChange.bind(this)}
          type="text"
          name="username"
          className="form-control" />
      </div>

      <div className="form-group">
        <label className="control-label">Password</label>
        <input
          value={this.state.password}
          onChange={this.onChange.bind(this)}
          type="password"
          name="password"
          className="form-control" />
      </div>

      <div className="form-group">
        <label className="control-label">Confirm Password</label>
        <input
          value={this.state.passwordConfirmation}
          onChange={this.onChange.bind(this)}
          type="password"
          name="passwordConfirmation"
          className="form-control" />
      </div>

      <div className="form-group">
        <label className="control-label">Email</label>
        <input
          value={this.state.email}
          onChange={this.onChange.bind(this)}
          type="text"
          name="email"
          className="form-control" />
      </div>



      <div className="form-group">
        <button className="btn btn-primary btn-lg">
        Sign up
        </button>
      </div>
      </form>
    )
  }
}



export default SignupForm
