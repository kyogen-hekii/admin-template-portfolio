import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import "./App.css"
import Main from "./route"
import configureStore, { history } from "./store"

const store = configureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </Provider>
    </div>
  )
}
export default App
