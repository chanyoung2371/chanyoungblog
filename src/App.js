//import React, {useState} from 'react';
import './App.css';
//import Modal from './Component/Modal';
//import List from './Component/List';
import Nav from './Component/Nav/Nav';
//import Header from './Component/Header';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Personality from './pages/Personality';
import Forte from './pages/Forte';
import Login from './pages/Loginpage';
import Signup from './pages/Signuppage';
import Family from './pages/Family';
import Future from './pages/Future';
import AppBar from './Component/Nav/Appbar'

function App() {

  return (
    <>
     <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/forte' component={Forte} />
        <Route path='/personality' component={Personality} />
        <Route path='/family' component={Family}/>
        <Route path='/future' component={Future}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup}/>
      </Switch>
      </Router>
      {/* <Header/>
      <List/>
  <Modal/>*/}
    </>
  );
}


export default App;
