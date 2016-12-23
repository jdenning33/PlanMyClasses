import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import AppRouter from './routes/AppRouter'


// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

//  creates a store from the apps root reducer
//  this is where the application state is stored
const store = createStore(rootReducer, preloadedState)
window.store = store
console.log(store.getState())
//  where to render. Attaches to html <div id='root'>
const MOUNT_NODE = document.getElementById('root')

var page = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

render(
  page,
  MOUNT_NODE
)
