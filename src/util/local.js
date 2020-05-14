export default {
  //从缓存中读取一个数据
  get(key,defVal){
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defVal;
  },
  set(key,val){
    localStorage.setItem(key,JSON.stringify(val))
  },
  remove(key){
    localStorage.removeItem(key)
  }
}