import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

export default class Education extends Component{
  render(){
    return(
      <Grid>
        <Cell col ={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col ={8}>
          <h4 style ={{marginTop: '8px'}}>{this.props.schoolName}</h4>
        </Cell>
      </Grid>
    )
  }
}
