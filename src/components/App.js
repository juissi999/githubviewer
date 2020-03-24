import React, {useState} from 'react'
import ViewUserSearch from './View/UserSearch'
import CommitDetails from './View/CommitDetails'

const App = () => {

  const [repos, setRepos] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [selectedRepo, setSelectedRepo] = useState('')

  if (selectedRepo === '') {
    return(<>
           <ViewUserSearch setSelectedRepo={setSelectedRepo} selectedUser={selectedUser} setSelectedUser={setSelectedUser} repos={repos} setRepos={setRepos} />
           </>)
  } else {
    return (<>
            <CommitDetails selectedUser={selectedUser} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo}/>
            </>)
  }
}

export default App
