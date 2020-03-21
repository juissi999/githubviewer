import React, {useState} from 'react'
import ViewUserSearch from './View/UserSearch.js'
import CommitDetails from './View/CommitDetails.js'

const App = () => {

  const [repos, setRepos] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [selectedRepo, setSelectedRepo] = useState('')

  if (selectedRepo === '') {
    return(<>
           <ViewUserSearch setSelectedRepo={setSelectedRepo} setSelectedUser={setSelectedUser} repos={repos} setRepos={setRepos} />
           </>)
  } else {
    return (<>
            <CommitDetails selectedUser={selectedUser} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo}/>
            </>)
  }
}

export default App
