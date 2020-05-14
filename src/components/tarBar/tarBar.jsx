import React from 'react'
import {NavLink} from 'react-router-dom'
import './css/tarBar.styl'


export default class TarBar extends React.Component{
  render(){
    return (
      <div className="tarBar">
        <NavLink to="/homePage" className="tarBarItem">
          <i className="icon icon-homePage" ></i>
          <span>首页</span>
        </NavLink>
        <NavLink to="/category" className="tarBarItem">
          <i className="icon icon-category"></i>
          <span>分类</span>
        </NavLink>
        <NavLink to="/worth" className="tarBarItem">
          <i className="icon icon-worth"></i>
          <span>值得买</span>
        </NavLink>
        <NavLink to="/shoppingCart" className="tarBarItem">
          <i className="icon icon-shoppingCart"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink to="/personal" className="tarBarItem" >
          <i className="icon icon-personal"></i>
          <span>个人</span>
        </NavLink>
      </div>
    )
  }
}