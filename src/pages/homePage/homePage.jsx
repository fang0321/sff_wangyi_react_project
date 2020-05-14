import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
import './css/homePage.styl'
import HewPeopleGift from '../../components/newPeopleGift/newPeopleGift'
import HotSell from '../../components/hotSell/hotSell'

export default class HomePage extends Component {
  state = {
    kingKongList:[],
    focusList:[],
    PolicyDescList:[],
    navPull:false,
    navIndex:0
  }
  //组件一旦挂载完成，react会帮我们调用componentDidMount，只会调用一次！
  async componentDidMount(){
    let kingKongList = await this.$http.shop.getKingKongList('/getKingKongList')
    this.setState({kingKongList})
    new BScroll(this.refs.navScroll,{scrollX:true,click:true})

    let focusList = await this.$http.shop.getFocusList("/getFocusList")
    this.setState({focusList})
    new Swiper('.swiper-container',{
      loop:true, //循环模式
      pagination: { //分页器
        el: '.swiper-pagination',
      }
    })

    let PolicyDescList = await this.$http.shop.getPolicyDescList("/getPolicyDescList")
    this.setState({PolicyDescList})
  }
  c
  render() {
    let {navPull,navIndex,kingKongList,focusList,PolicyDescList} = this.state
    return (
      <div className="homePage">
        <div className="header"> 
          <div className="searchWrap">
            <a className="logo" href="##"></a>
            <Link className="search" to="/search">
              <i className="iconfont icon-fangdajing"></i>
              <span>搜索商品，共25353款好物</span>
            </Link>
            <div className="loginBtn">登录</div>
          </div>
          <div className="nav" className={`nav ${navPull?'pull':''}`}>
            <div className="navScroll" ref="navScroll">
              <ul className="scroll" >
                <li className={`navItem ${navIndex===0?'active':''}`} onClick={()=>{this.setState({navIndex:0})}}>
                  <span className="txt">推荐</span>
                </li>
                {
                  kingKongList.map((kingKongItem,index)=>{
                  return  <li onClick={()=>{this.setState({navIndex:index+1})}} className={`navItem  ${index===navIndex-1?'active':''}`} key={index}>
                            <span className="txt">{kingKongItem.text}</span>
                          </li>
                  })
                }
              </ul>
            </div>
            <div className="tabAlter">全部频道</div>
            <div className="toggleWrap">
              <div className="linear"></div>
              <div onClick={()=>{this.setState({navPull:!navPull})}} className={`toggle iconfont ${navPull?'icon-xiala1':'icon-xiala'}`}></div>
            </div>
            <div className="moreCate">
              <div className={`moreCateItem ${navIndex===0?'active':''}`} onClick={()=>{this.setState({navIndex:0})}}>
                推荐
              </div>
              {
                kingKongList.map((item,index)=>{
                  return <div onClick={()=>{this.setState({navIndex:index+1})}} key={index} className={`moreCateItem ${navIndex===index + 1?'active':''}`}>{item.text}</div>
                })
              }
            </div>
          </div>
        </div>
        <div className="content">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                focusList.map((item,index)=>{
                  return  <div className="swiper-slide" key={index} >
                            <img src={item.picUrl} alt=""/>
                          </div>
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="serviceWrap">
            <ul className="service">
              {
                PolicyDescList.map((item,index)=>{
                  return  <li className="serviceItem" key={index}>
                            <img src={item.icon} alt=""/>
                            <span>{item.desc}</span>
                          </li>
                })
              }
            </ul>
          </div>
          <div className="goodsCategoryWrap">
            <ul className="goodsCategory">
              {
                kingKongList.map((item,index)=>{
                  return  <li className="goodsCategoryItem" key={index}>
                            <a href="##">
                              <img src={item.picUrl} alt=""/>
                              <span>{item.text}</span>
                            </a>
                          </li>
                })
              }
            </ul>
          </div>
          <div className="discountsWrap">
            <div className="discounts">
              <a className="discountsImg" href="##"></a>
            </div>
          </div>
          <HewPeopleGift></HewPeopleGift>
          <HotSell></HotSell>
          <div className="footer">
            页脚部分
          </div>
        </div>
      </div>
    )
  }
}
