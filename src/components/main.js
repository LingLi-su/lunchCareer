import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import SignupPage from './signuppage';
import Project from './project';
import Profile from './profile';


const Main = () => (
  <Switch>
    <Route exact path ="/" component ={LandingPage} />

    <Route path ="/profile" component ={Profile} />
    <Route path ="/signuppage" component ={SignupPage} />
  </Switch>
)

export default Main;
