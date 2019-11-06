import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';




function App() {


  return (

    <div className="demo-big-content">

    <Layout fixedHeader>
        <Header transparent title="Title"className="header-color" title= <Link style ={{textDecoration: 'none', color: 'white'}} to="/">LunchCareer</Link>>

            <Navigation>
                <Link to="/profile">Be Coach</Link>
                <Link to="/signuppage">Log In</Link>

            </Navigation>
        </Header>

        <Content>


            <Main />



        </Content>
    </Layout>
</div>

  );
}

export default App;
