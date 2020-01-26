import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/shop/shop.component'
const HatPage = () => {
  return (<div>HAT PAGE</div>)
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}


export default App;
