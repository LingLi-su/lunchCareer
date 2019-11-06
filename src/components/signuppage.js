import React, {Component} from 'react';
import SignupForm from './signupform';
import SignIn from './register';
import Footer from './footer';

class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({isRegisterOpen: false, isLoginOpen: true});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {

    return (
      <div className ="root-container">
      <div className="body" style={{height:'100%',paddingBottom:'50px'}}>
      <div className="boxhead">
        <div className="box-controller" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className ={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")}
        onClick={this.showLoginBox.bind(this)} style={{fontSize:'1.5em',margin:'2em',cursor:'pointer'}}>
        Login
        </div>
        <div className ={"controller"+ (this.state.isRegisterOpen ? "selected-controller" : "")}
         onClick={this.showRegisterBox.bind(this)}style={{fontSize:'1.5em',margin:'2em',cursor:'pointer'}}>
        Register
        </div>
        </div>
        </div>
        <div className ="box-container" style={{textAlign:'center',width:250, margin:'auto'}}>
          {this.state.isLoginOpen && <SignIn />}
          {this.state.isRegisterOpen && <SignupForm />}
        </div>
        </div>
        <Footer/>
        </div>

    );
  }
}



export default SignupPage;
