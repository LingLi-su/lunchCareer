import React, {Component} from 'react';
import{Grid, Cell, Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton } from 'react-mdl';
import {Link} from 'react-router-dom';

export default class Story extends Component {
  render(){
    return(
      <Grid>
      <Cell col ={4}>
      <div style={{textAlign:'center'}}>

      <img src ="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height:'200px'}} />
      </div>

      </Cell>
      <Cell className="resume-right-col" col={8}>
        <div className="infotitle">
        <h1> How to be a Product Manager</h1>
        </div>
        <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <div className="infobody">
        <h4>sdhsahhsdhdhsahdsahdshadsha</h4>
        </div>
      </Cell>
      <Cell className="resume-right-col" col={8} style={{textAlign:'right'}}>
      <div className="infotitle">
      <h1> How to be a Product Manager</h1>
      <hr style ={{borderTop: '3px solid #833fb2', width: '50%', float:'right'}}/>
      </div>



      <div className="infobody">
      <h4>sdhsahhsdhdhsahdsahdshadshasdasadsadsadasdsaa</h4>
      </div>
      </Cell>
      <Cell col ={4}>
      <div style={{textAlign:'center'}}>

      <img src ="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height:'200px'}} />
      </div>

      </Cell>

      </Grid>
    )
  }
}
