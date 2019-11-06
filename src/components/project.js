import React, {Component} from 'react';
import{Menu, MenuItem, Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions,CardText, Button, CardMenu, IconButton } from 'react-mdl';
import {Link} from 'react-router-dom';



class Projects extends Component{
  constructor(props){
    super(props);

  this.state = {
    activeTab:0,
    location: "New York"
  };
}

toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <div className='projects-grid'>

      <Card shadow ={5} style={{width:250, margin:'auto'}}>
        <CardTitle className='bbb'style={{cursor:'pointer',color: '#fff',height: '176px', position:'relative',background:
      'url(https://12s1o525xrgk2r8n1g2juoap-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Megan_Creegan.jpg) center/cover'}}>
        <div className='intro'>
          <h2>hellooooooooo</h2>
        </div>
        </CardTitle>
        <CardText>
        <h4>XiuYan Xin<i class="fas fa-map-marker-alt" style={{fontSize:'15px',paddingLeft:'15px'}}>{this.state.location}</i></h4> 2020 Forbes Under 30
        </CardText>
        <CardActions border>
        <Button><Link to="./profile">Profile</Link></Button>
        </CardActions>
        <CardMenu style={{color:'fff'}}>

        </CardMenu>
      </Card>






      <Card shadow ={5} style={{width:250, margin:'auto'}}>
        <CardTitle style={{cursor:'pointer',color: '#fff',height: '176px', background:
      'url(https://12s1o525xrgk2r8n1g2juoap-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Megan_Creegan.jpg) center/cover'}}>
        XiuYan Xin</CardTitle>
        <CardText>
        2020 Forbes Under 30
        </CardText>
        <CardActions border>
        <Button><Link to="./resume">Profile</Link></Button>
        </CardActions>
        <CardMenu style={{color:'fff'}}>

        </CardMenu>
      </Card>

      <Card shadow ={5} style={{width:250, margin:'auto'}}>
        <CardTitle style={{cursor:'pointer',color: '#fff',height: '176px', background:
      'url(https://12s1o525xrgk2r8n1g2juoap-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Megan_Creegan.jpg) center/cover'}}>
        XiuYan Xin</CardTitle>
        <CardText>
        2020 Forbes Under 30
        </CardText>
        <CardActions border>
        <Button><Link to="./resume">Profile</Link></Button>
        </CardActions>
        <CardMenu style={{color:'fff'}}>

        </CardMenu>
      </Card>

      <Card shadow ={5} style={{width:250, margin:'auto'}}>
        <CardTitle style={{cursor:'pointer',color: '#fff',height: '176px', background:
      'url(https://12s1o525xrgk2r8n1g2juoap-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Megan_Creegan.jpg) center/cover'}}>
        XiuYan Xin</CardTitle>
        <CardText>
        2020 Forbes Under 30
        </CardText>
        <CardActions border>
        <Button><Link to="./resume">Profile</Link></Button>
        </CardActions>
        <CardMenu style={{color:'fff'}}>

        </CardMenu>
      </Card>
      </div>


    )
  }else if(this.state.activeTab === 1){
    return(
      <div><h1>1</h1></div>
    )
  }else if(this.state.activeTab === 2){
    return(
      <div><h1>2</h1></div>
    )
  }else if(this.state.activeTab === 3){
    return(
      <div><h1>3</h1></div>
    )
  }
}



  render(){
    return(
      <div className ="category-tabs">

        <Tabs activeTab={this.state.activeTab} onChange ={(tabId) => this.setState({activeTab:tabId})} ripple>

        <Tab id ="lifelist">Life</Tab>

        <Menu className='list'target="lifelist">
        <div className='listbox'>
            <MenuItem><a href='./resume'>Some Action</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
            <MenuItem><a href='./resume'>Some A</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem><MenuItem><a href='./resume'>Some Action</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
            </div>
        </Menu>

        <Tab id ="healthlist">Health</Tab>
        <Menu className='list'target="healthlist">
            <div className='listbox'>
            <MenuItem><a href='./resume'>Some Action</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
            <MenuItem><a href='./resume'>Some A</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem><MenuItem><a href='./resume'>Some Action</a></MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
            </div>
        </Menu>

        <Tab>Technology</Tab>

        <Tab>Finance</Tab>
        <Tab>Entrepreneur</Tab>
        <Tab>Education</Tab>
        <Tab>Therapy</Tab>
        <Tab>Advancement</Tab>
        <Tab>Others</Tab>
        </Tabs>
        <section>
        <Grid className='projects-grid'>
        <Cell col={12}>
          <div className="content">
        {this.toggleCategories()}
        </div>
        </Cell>
        </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
