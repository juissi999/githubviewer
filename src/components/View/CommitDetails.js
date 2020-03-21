import React  from 'react'
import CommitList from '../Commit/List.js'
import NavigationForm from '../NavigationForm/'

const CommitDetails = ({selectedUser, selectedRepo, setSelectedRepo}) => {

  return (<>
          <div>
          <NavigationForm selectedUser={selectedUser} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} />
          </div>
          <div>
          <CommitList selectedUser={selectedUser} selectedRepo={selectedRepo} />
          </div></>)
  }

export default CommitDetails
