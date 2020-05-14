import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BScroll from 'better-scroll'
import './css/category.styl'

export default class Category extends Component {
  state = {
    //左边导航
    categoryL1List:[],
    //右边内容
    cateLists:[],
    //左边导航列表的id
    cateIndex:11,
    //右边查找出来符合导航id的对象
    cateObj:{},
    //查找出来的对象里的数据数组
    categoryList:[],
    
  }
  async componentDidMount(){
    let cateNavDatas = await this.$http.shop.getCateNavDatas("/getCateNavDatas")
    if(cateNavDatas){
      this.setState({categoryL1List:cateNavDatas.categoryL1List})
    }
    new BScroll(this.refs.nav,{scrollY:true,click:true})
    
    let cateLists = await this.$http.shop.getCateLists("/getCateLists")
    if(cateLists){
      this.setState({cateLists})
    }
    new BScroll(this.refs.cateListWrap,{scrollY:true,click:true})

    let cateObj = this.state.cateLists.find((item)=>{
      return item.id === this.state.cateIndex
    })
    if(cateObj.categoryList){
      this.setState({categoryList:cateObj.categoryList})
    }
  }
   changeCateList = async (id)=>{
    await this.setState({cateIndex:id})
    let cateObj = this.state.cateLists.find((item)=>{
      return item.id === this.state.cateIndex
    })
    if(cateObj.categoryList){
      this.setState({categoryList:cateObj.categoryList})
    }
    if(cateObj.subCateList){
      this.setState({categoryList:cateObj.subCateList})
    }
  }
  render() {
    let {categoryL1List,categoryList,cateIndex} = this.state
    return (
      <div className="category">
        <div className="header">
          <Link className="search" to="/search">
            <i className="iconfont icon-fangdajing"></i>
            <span>搜索商品，共26344款好物</span>
          </Link>
        </div>
        <div className="content">
          <div className="navWrap">
            <div className="nav"  ref="nav">
              <ul className="cate">
                {
                  categoryL1List.map((item,index)=>{
                    return   <li className={`cateItem ${item.id===cateIndex ?'active':''}`} key={index} onClick={()=>{this.changeCateList(item.id)}}>
                              <a className="txt" href="##">{item.name}</a>
                            </li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className="cateListWrap" ref="cateListWrap">
            <div className="cateList" >
              <div className="banner" >
                <img src={categoryList.length!==0 && categoryList[0].wapBannerUrl ? `${categoryList[0].wapBannerUrl}` : ``} alt=""/>
              </div>
              <ul className="list" >
                {
                  categoryList.map((item,index)=>{
                    return <li className="listItem" key={index}>
                            <img src={item.wapBannerUrl} alt=""/>
                            <span>{item.name}</span>
                          </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
