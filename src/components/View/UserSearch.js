import React from 'react'
import UserSearchForm from '../User/SearchForm.js'
import RepositoryList from '../Repository/List.js'

const ViewUserSearch = ({setSelectedUser, repos, setRepos, setSelectedRepo}) => {
  return (<div>
          <UserSearchForm setSelectedUser={setSelectedUser} setRepos={setRepos}/>
          <RepositoryList repos={repos} setSelectedRepo={setSelectedRepo}/>
          </div>)
}

export default ViewUserSearch
