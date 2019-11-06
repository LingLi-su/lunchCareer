import React, {Component} from 'react';


export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: '',
    }
  }
  onChange(event){
    this.setState({[event.target.name]:event.target.value});
  }
  onSubmit(event){
    event.preventDefault();
  }

  render(){


    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className ="registration" style={{paddingBottom:'10px'}}><h4>Sign In</h4></div>
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
        <button className="btn btn-primary btn-lg">
        Login
        </button>
      </div>
      </form>


    )
  }
}
