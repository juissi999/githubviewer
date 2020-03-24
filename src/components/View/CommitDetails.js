import React  from 'react'
import CommitList from '../Commit/List'
import NavigationForm from '../Navigation/Form'

const CommitDetails = ({selectedUser, selectedRepo, setSelectedRepo}) => {

  return (<>
            <NavigationForm selectedUser={selectedUser} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} />
            <CommitList selectedUser={selectedUser} selectedRepo={selectedRepo}/>
          </>)
  }

export default CommitDetails
