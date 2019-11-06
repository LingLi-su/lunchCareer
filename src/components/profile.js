import React, {Component} from 'react';
import {Grid, Cell, Tabs, Tab} from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Footer from './footer';
class Profile extends Component{
  constructor(props){
    super(props);
  this.state = {
    activeTab:0,

  };
}
toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <div>
      <h2>Education</h2>
      <Education
        startYear={2013}
        endYear={2016}
        schoolName="Syracuse University"
        />
        <hr style ={{borderTop: '3px solid #e22947'}}/>
        <h2>Skills</h2>
        <Skills
          skill="Java"
          progress={100}
          />
    </div>
    )
  }else if(this.state.activeTab === 1){
      return(
        <div><h2>Who Am I</h2><h3>blablablablablablablablablablablablablabla
        </h3></div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div><h2>Comments and Ratings</h2></div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div><h2>Popular Questions</h2></div>
      )
    }
  }
  render(){
    return(
      <div>
      <Grid>
        <Cell col={4}>
        <div style={{textAlign:'center'}}>

        <img src ="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png" alt="avatar" style={{height:'200px'}} />
        </div>
        <h2 style ={{paddingTop: '2em'}}>Ling Li</h2>
        <h4 style={{color: 'grey'}}>Programmer</h4>
        <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <p>Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!
        Hello!!!!!Hello!!!!!Hello!!!!!
        Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!
        Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!Hello!!!!!</p>
        <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <h5>Address</h5>
        <p>California</p>
        <h5>Phone Number</h5>
        <p>123456789</p>
        <h5>Email</h5>
        <p>xxx@gmail.com</p>
        <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>
        <Cell className="resume-right-col" col={8}>
        <Tabs activeTab={this.state.activeTab} onChange ={(tabId) => this.setState({activeTab:tabId})} ripple>

        <Tab style={{color:'#fff'}}>About</Tab>
        <Tab style={{color:'#fff'}}>Topic</Tab>
        <Tab style={{color:'#fff'}}>Review</Tab>
        <Tab style={{color:'#fff'}}>Common Questions</Tab>
        </Tabs>
        {this.toggleCategories()}
        </Cell>
      </Grid>
      <Footer/>
      </div>
    )
  }
}

export default Profile;
