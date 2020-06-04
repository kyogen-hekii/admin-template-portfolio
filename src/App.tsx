import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import configureStore, { history } from "./store"

import "./App.css"
import Route from "./route"
import Layout from "./containers/Layout"

const store = configureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout Route={Route} />
        </ConnectedRouter>
      </Provider>
    </div>
  )
}
export default App
