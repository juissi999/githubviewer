import React from 'react'
import Repository from './'

const RepositoryList = ({repos, setSelectedRepo}) => {
  return (<ul>
            {repos.map((repo, i)=>{
              return(<Repository key={i} repo={repo} setSelectedRepo={setSelectedRepo}/>)
            })}
          </ul>)
}

export default RepositoryList
