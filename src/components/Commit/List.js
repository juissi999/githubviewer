import React, {useState, useEffect}  from 'react'
import Commit from './'
import ghGetter from '../../ghGetter'

// const CommitList = ({commits}) => {
//   return (<div>
//     {commits.map((commit, i) => <Commit key={i} commit={commit}/>)}/></div>)
// }

const CommitList = ({commits, selectedRepo, setSelectedRepo}) => {
    const onClick = () => {
      setSelectedRepo('')
    }

    return (<div>
              <button onClick={onClick}>Back</button>
              {selectedRepo}
            </div>)
  }

export default CommitList
