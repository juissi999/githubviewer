import React, {useState} from 'react'
import UserSearchForm from './UserSearchForm/'
import RepositoryList from './Repository/List.js'
import CommitList from './Commit/List.js'


const App = () => {

  const [repos, setRepos] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [selectedRepo, setSelectedRepo] = useState('')

  if (selectedRepo === '') {
    return(<>
            <UserSearchForm setSelectedUser={setSelectedUser} setRepos={setRepos}/>
            <RepositoryList repos={repos} setSelectedRepo={setSelectedRepo}/>
           </>)
  } else {
    return (<><CommitList selectedUser={selectedUser} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo}/></>)
  }
}

export default App
