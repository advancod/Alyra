import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from "./App"

const store = createStore(reducers)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("play")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
