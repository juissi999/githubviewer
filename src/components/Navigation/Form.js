import React from 'react'
import NavigationButton from './Button'
import UserHeader from '../User/Header'

const NavigationForm = ({selectedUser, selectedRepo, setSelectedRepo}) => {

  const onClick = () => {
    // back-button causes re-rendering of the repository-list with hook
    setSelectedRepo('')
  }

  return(<div>
          <NavigationButton onClick={onClick}>Back</NavigationButton>
          <UserHeader>{`${selectedUser}/${selectedRepo}`}</UserHeader>
         </div>)
}

export default NavigationForm
