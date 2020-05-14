import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './css/search.styl'

export default class Search extends Component {
  state = {
    hotSearchList:[],
    listItemIndex:0,
    searchContent:'',
    searchList:[]
  }
  async componentDidMount(){
    let body = await this.$http.shop.getSearchList("/getSearchList")
    if(body.code === '200'){
      this.setState({hotSearchList:body.data.hotKeywordVOList})
    }
  }
  getsearch = ()=>{
    let searchIpt = this.refs.searchIpt
    if(searchIpt.value){
      this.setState({searchContent:searchIpt.value})
      axios.get(`/163/xhr/search/searchAutoComplete.json?keywordPrefix=${searchIpt.value}`)
      .then((res)=>{
        this.setState({searchList:res.data.data})
      })
    }
  }
  canael = ()=>{
    if(this.state.searchContent){
      this.refs.searchIpt.value = ''
      this.setState({searchContent:''})
      this.setState({searchList:[]})
    }
  }
  render() {
    let {hotSearchList,searchList,listItemIndex} = this.state
    console.log(searchList);
    return (
      <div className="search">
        <div className="header">
          <div className="searchIptWrap">
            <i className="iconfont icon-fangdajing"></i>
            <input className="searchIpt" type="text" placeholder="夏凉好物推荐" ref="searchIpt"/>
            <button onClick={this.getsearch} className="searchBtn">搜索</button>
          </div>
          <Link className="cancel" onClick={this.canael} to={`${this.state.searchContent ? '/search' : '/homePage'}`}>
            <span>取消</span>
          </Link>
        </div>
        <ul className="searchList">
          {
            searchList.map((item,index)=>{
              return  <li className="searchListItem" key={index}>
                        <span>{item}</span>
                        <i className="iconfont icon-gengduo1"></i>
                      </li>
            })
          }
        </ul>
        <div className="hotSearch"  style={{display:`${searchList.length===0?'block':'none'}`}}>
          <div className="title">
            <span>热门搜索</span>
          </div>
          <div className="hotSearchList">
            {
              hotSearchList.map((item,index)=>{
                return  <a className={`listItem ${index===listItemIndex ? 'active':''}`} href="##" key={index}>
                          {item.keyword}
                        </a>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
