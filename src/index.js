import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import 'lib-flexible/flexible'
import http from './http'
React.Component.prototype.$http = http
ReactDOM.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
   ,
  document.getElementById('root'))