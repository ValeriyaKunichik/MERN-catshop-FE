import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'

import {disableReactDevTools} from '@fvilers/disable-react-devtools'
if (process.env.NODE_ENV==="production") disableReactDevTools()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


