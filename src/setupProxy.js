const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/3001",{
        target:"http://localhost:3001",
        changeOrigin:true,
        pathRewrite:{
          "^/3001":""
        }
      }
    )
  )
  app.use(
    proxy("/163",{
        target:"https://m.you.163.com",
        changeOrigin:true,
        pathRewrite:{
          "^/163":""
        }
      }
    )
  )
}