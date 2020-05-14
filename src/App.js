import React from 'react'
import Tarbar from './components/tarBar/tarBar'
import {Switch,Redirect,Route} from 'react-router-dom'

import HomePage from './pages/homePage/homePage'
import Category from './pages/category/category'
import Worth from './pages/worth/worth'
import ShoppingCart from './pages/shoppingCart/shoppingCart'
import Personal from './pages/personal/personal'
import Search from './pages/search/search'
export default class App extends React.Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/homePage" component={HomePage}/>
          <Route path="/category" component={Category}/>
          <Route path="/worth" component={Worth}/>
          <Route path="/shoppingCart" component={ShoppingCart}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/search" component={Search}/>
          <Redirect to="/homePage"/>
        </Switch>
        <Tarbar></Tarbar>
      </div>
    )
  }
}