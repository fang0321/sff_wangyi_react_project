// import {loading,success,fail} from "./toast"
export default (axios,config={})=>{
  let modelName = config.name || "default";
  if(!config.api)
    throw new Error(`${modelName}的配置文件中的api选项是必须的`)
  if(Object.prototype.toString.call(config.api) !== "[object Object]")
    throw new Error(`${modelName}的配置文件中的api选项必须是个Object对象`)

  let httpObj={};
  let api = config.api;

  for(let apiName in api){
    //toast 代是否要开启轻提示
    //data:apiData   ; data是结构出来的数据 apiData别名
    //hooks:请求级别的钩子
    // let {url,method,isForm,data:apiData,toast,hooks,corsUrl,token} = api[apiName];
    let {url,method,isForm,data:apiData,hooks,corsUrl,token} = api[apiName];
    apiData = apiData||{};
    hooks = hooks||{};
    let {beforeReq,afterReqSuccess,afterReqFail} = hooks;

    httpObj[apiName] = async (data={})=>{
      let transformData = null;
      if(isForm){
        transformData = new FormData();
        for(let key in data){
          transformData.append(key,data[key])
        }
        for(let key in apiData){
          transformData.append(key,apiData[key])
        }
      }else {
        transformData =  Object.assign(apiData, data);
      }


      let body = "";

      //跨域的公共处理
      if(corsUrl){
        url =  corsUrl + url
        corsUrl = ""
      }
      // Token的处理
      let headers = {}
      if(token){
        headers = {Authorization:token()}
      }

      try {
        //真正的请求发送的代码
        beforeReq&&beforeReq.call(config);
        // toast && loading();
        switch (method){
          case "get":
          case "delete":
            body = await axios({
              url,
              method,
              params:transformData,
              headers
            })
            break;
          case "put":
          case "post":
            body = await axios({
              url,
              method,
              data:transformData,
              headers
            })
            break;
        }
        afterReqSuccess&&afterReqSuccess.call(config,body);
        // toast && success();
      }catch (e) {
        afterReqFail&&afterReqFail.call(config);
        // toast && fail();
      }

      //才是组件上拿到的最后的数据  body是已经经过响应拦截器处理的!!!
      return body;
    }
  }


  return httpObj;
}
