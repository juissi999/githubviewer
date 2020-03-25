import React from 'react'
import {useHistory} from "react-router-dom"

const Repository = ({user, repo}) => {
  
  const history = useHistory()

  const onClick = () => {
    history.push(`/${user}/${repo.name}`)
  }

  return (<li>
          <button className={'repository'} onClick={onClick}>{repo.name}</button>
          </li>)
}

export default Repository
