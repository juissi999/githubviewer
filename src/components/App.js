import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import CommitList from './Commit/List'
import UserSearchForm from './User/SearchForm'
import RepositoryList from './Repository/List'

const App = () => {

  return(
    <Router>
      <Switch>
        <Route path="/:user/:repo">
          <CommitList />
        </Route>
        <Route path="/:user">
          <UserSearchForm />
          <RepositoryList/>
        </Route>
        <Route path="/">
          <UserSearchForm />
        </Route>
      </Switch>
    </Router>)
}

export default App
