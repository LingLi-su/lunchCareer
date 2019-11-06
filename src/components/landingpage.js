import React, {Component} from 'react';
import '../search.css';
import Projects from './project';
import Story from './story';
import Footer from './footer'
import {Redirect} from 'react-router-dom';
import{Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton } from 'react-mdl';

export default class Landing extends Component{
  constructor(props){
    super(props);


  this.state = {
    redirect:false,
    search:''
  }
  this.logout = this.logout.bind(this);
}


logout(){
  sessionStorage.setItem("userData",'');
  sessionStorage.clear();

}

  updateSearch(event){
    this.setState({search:event.target.value})
  }
  render(){
    if(this.state.redirect){
      return(<Redirect to ={'/'}/>)
    }

    const sloganStyle = {

    };
    return(
      <div className="body">
      <div className ="slogan">
      <h1>Time for <span style={{color:'red'}}>Lunch</span><p>Launch your <span style={{color:'red'}}>Career!</span></p></h1>
      </div>
      <div className ="search-container">
      <label className="search-label" htmlFor="search-input">
      <input type ="text" value ={this.state.search}
      onChange={this.updateSearch.bind(this)} placeholder="search..."/>
      <i class="fas fa-search search-icon"></i>
      </label>
      </div>
      <Projects/>
      <Story/>
      <Footer/>
      </div>
    )
  }
}
