//import React, {useState} from 'react';
import './App.css';
//import Modal from './Component/Modal';
//import List from './Component/List';
import Nav from './Component/Nav/Nav';
//import Header from './Component/Header';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Movie from './pages/Moviepage';
import Login from './pages/Loginpage';

function App() {

  return (
    <>
     <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movie' component={Movie} />
        <Route path='/map' component={Map} />
        <Route path='/login' component={Login} />
      </Switch>
      </Router>
      {/* <Header/>
      <List/>
  <Modal/>*/}
    </>
  );
}


export default App;
