import React from 'react'
import Repository from './'

const RepositoryList = ({repos}) => {
  return (<div>
            {repos.map((repo, i)=>{
              return(<Repository key={i} repo={repo}/>)
            })}
          </div>)
}

export default RepositoryList
