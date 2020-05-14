import React, { Component } from 'react'
import './css/hotSell.styl'

export default class HotSell extends Component {
  state = {
    categoryList:[]
  }
  async componentDidMount(){
    let categoryList = await this.$http.shop.getCategoryList("/getCategoryList")
    this.setState({categoryList})
  }
  render() {
    let {categoryList} = this.state
    return (
      <div className="hotSell">
        <div className="title">
          <span className="txt">类目热销榜</span>
        </div>
        <div className="contentWrap">
          <ul className="content">
            {
              categoryList.map((item,index)=>{
                return  <li className="contentItem" key={index}>
                          <div className="name">{item.categoryName}</div>
                          <div className="imgWrap">
                            <img src={item.picUrl} alt=""/>
                          </div>
                        </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
