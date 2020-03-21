import React from 'react'

const Repository = ({repo, setSelectedRepo}) => {
  
  const onClick = () => {
    setSelectedRepo(repo.name)
  }

  return (<li>
          <button className={'repository'} onClick={onClick}>{repo.name}</button>
          </li>)
}

export default Repository
