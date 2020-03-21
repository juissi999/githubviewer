import React from 'react'
import UserSearchForm from '../User/SearchForm.js'
import RepositoryList from '../Repository/List.js'

const ViewUserSearch = ({selectedUser, setSelectedUser, repos, setRepos, setSelectedRepo}) => {
  return (<div>
          <UserSearchForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} setRepos={setRepos}/>
          <RepositoryList repos={repos} setSelectedRepo={setSelectedRepo}/>
          </div>)
}

export default ViewUserSearch
