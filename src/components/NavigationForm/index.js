import React from 'react'
import UserHead from '../User/Head.js'

const NavigationForm = ({selectedUser, selectedRepo, setSelectedRepo}) => {

  const onClick = () => {
    // back-button causes re-rendering of the repository-list with hook
    setSelectedRepo('')
  }

  return(<div>
          <button onClick={onClick}>Back</button>
          <UserHead>{`${selectedUser}/${selectedRepo}`}</UserHead>
         </div>)
}

export default NavigationForm
