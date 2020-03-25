import React from 'react'
import {useHistory} from 'react-router-dom'
import NavigationButton from './Button'
import UserHeader from '../User/Header'

const NavigationForm = ({user, repo}) => {
  const history = useHistory()

  const onClick = () => {
    // back-button causes re-rendering of the repository-list with hook
    history.push(`/${user}`)
  }

  return(<div>
          <NavigationButton onClick={onClick}>back</NavigationButton>
          <UserHeader>{`${user}/${repo}`}</UserHeader>
         </div>)
}

export default NavigationForm
