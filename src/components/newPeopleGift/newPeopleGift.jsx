import React, { Component } from 'react'
import './css/newPeopleGift.styl'
import newPeopleGift_1 from './images/newPeopleGift_1.png'

export default class HewPeopleGift extends Component {
  render() {
    return (
      <div className="newPeopleGift">
        <div className="title">
          <span className="txt">新人专享礼</span>
        </div>
        <div className="content">
          <div className="left">
            <div className="title">
              <span>新人专享礼包</span>
            </div>
            <div className="detail">
              <img src={newPeopleGift_1} alt=""/>
              <div className="more"></div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="title">
                <span className="title_1">福利社</span>
                <span className="title_2">今日特价</span>
              </div>
              <div className="picWrap">
                <div className="pic"></div>
                <div className="discount">
                  <span className="line1">¥7.9</span>
                  <span className="line2">¥9.9</span>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="title">
                <span className="title_1">新人拼团</span>
                <span className="title_2">1元起包邮</span>
              </div>
              <div className="picWrap">
                <div className="pic"></div>
                <div className="discount">
                  <span className="line1">¥9.9</span>
                  <span className="line2">¥16.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
