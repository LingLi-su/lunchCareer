import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import{Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton } from 'react-mdl';
export default class Footer extends Component {
  render(){
    return(
      <div>
      <Grid style={{padding: '58px 0', backgroundColor:'#fff'}}>
      <Cell col={4}>
      <div className ="endingbox" style={{textAlign:'center'}}>
      <h1 style={{textAlign:'center'}}> Contact Us</h1>
      <h3 style={{textAlign:'center'}}>(917)361-7727</h3>
      <button className="endingbutton">
      FeedBack
      </button>
      <button className="endingbutton">
      Support
      </button>
      </div>
      </Cell>
      <Cell col ={4}>
      <h1 style={{textAlign:'center'}}> LunchCareer</h1>
      <h3 style={{textAlign:'center'}}> <span style={{color:'red'}}>One</span> on <span style={{color:'red'}}>One</span> Chat with the Professionals</h3>
      </Cell>
      <Cell col ={4}>
      <div className='icons' style={{textAlign:'center', fontSize:'3em',flexWrap: 'wrap'}}>
      <i style ={{width:'50%', textAlign:'center'}}class="fab fa-instagram"></i>
      <i style ={{width:'50%', textAlign:'center'}}class="fab fa-facebook-f"></i>
      <i style ={{width:'50%', textAlign:'center'}}class="fab fa-weixin"></i>
      <i style ={{width:'50%', textAlign:'center'}}class="fab fa-twitter"></i>
      </div>
      </Cell>
      </Grid>
      <div className="bottom">
      <div className="footer-bottom">
      <div className="footericon">
      <div className="onelogo">
      <i class="fas fa-globe-americas"></i>
      <h3>Globally Centered</h3>
      </div>
      <div className="onelogo">
      <i class="fas fa-user-tie"></i>
      <h3>Professional Elites</h3>
      </div>
      <div className="onelogo">
      <i class="far fa-comments"></i>
      <h3>Enjoy Lunch and Talk</h3>
      </div>
      <div className="onelogo">
      <i class="fas fa-graduation-cap"></i>
      <h3>Be Anyone</h3>
      </div>
      </div>
      <ul class="links">
      <a href="./">Home</a>
      <a href='#'>About Us</a>
      <a href='#'>Help</a>
      </ul>
      <p className="text-xs-center">
      &copy;{new Date().getFullYear()} Career Guide App - All Right Reserved
      </p>
      </div>
      </div>
      </div>
    );
  }
}
