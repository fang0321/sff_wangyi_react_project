export default {
  // name:"Shop",
  api:{
    // 主页导航 、商品分类
    getKingKongList:{
      url:"/3001/getKingKongList",
      method:"get",
      // toast:true
    },
    // 主页轮播图
    getFocusList:{
      url:"/3001/getFocusList",
      method:"get"
    },
    // 主页服务栏
    getPolicyDescList:{
      url:"/3001/getPolicyDescList",
      method:"get"
    },
    // 主页类目热销榜
    getCategoryList:{
      url:"/3001/getCategoryList",
      method:"get"
    },
    //分类页面---左边导航
    getCateNavDatas:{
      url:"/3001/getCateNavDatas",
      method:"get"
    },
    //分类页面---右边内容
    getCateLists:{
      url:"/3001/getCateLists",
      method:"get"
    },
    ////值得买轮播
    getWorthSwiper:{
      url:"/3001/getWorthSwiper",
      method:"get"
    },
    //搜索页面的热门搜索列表
    getSearchList:{
      url:"/3001/getSearchList",
      method:"get"
    }
  }
}
