import logo from './logo.svg';
import React from 'react';
import './App.css';
import { HomePage } from './components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)


function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
        
  );
}

export default App;
