import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MainPage from './components/MainPage/MainPage';
import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomePage}/>
          <Route exact path="/main-page" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
