import React, {useState} from 'react'
import UserNameForm from './UserNameForm/'
import RepositoryList from './Repository/List.js'

const App = () => {

  const [repos, setRepos] = useState([])

  return(<>
          <UserNameForm setRepos={setRepos}/>
          <RepositoryList repos={repos}/>
         </>)
}

export default App
