import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component'
import{Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/shop" component={ShopPage}/>  
        </Switch>
    </div>
  );
}

export default App;
