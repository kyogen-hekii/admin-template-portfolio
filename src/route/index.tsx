import React from "react"
import { Route, Switch } from "react-router-dom"

import DummyPage from "../dev/DummyPage"

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={DummyPage} />
    </Switch>
  )
}
