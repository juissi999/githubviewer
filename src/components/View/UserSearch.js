import React from 'react'
import UserSearchForm from '../User/SearchForm'
import RepositoryList from '../Repository/List'

const ViewUserSearch = ({selectedUser, setSelectedUser, repos, setRepos, setSelectedRepo}) => {
  return (<div>
          <UserSearchForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} setRepos={setRepos}/>
          <RepositoryList repos={repos} setSelectedRepo={setSelectedRepo}/>
          </div>)
}

export default ViewUserSearch
