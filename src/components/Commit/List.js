import React, {useState, useEffect}  from 'react'
import Commit from './'
import ghGetter from '../../ghGetter'

const maxCommitCount = 10

const CommitList = ({selectedUser, selectedRepo, setSelectedRepo}) => {

  const [commits, setCommits] = useState([])

  useEffect(() => {
    // use effect hook to query commits for this repository at start
    ghGetter.getCommits(selectedUser, selectedRepo)
    .then((c) => {
      setCommits(c)
    })
  }, [])

  const onClick = () => {
    // back-button causes re-rendering of the repository-list with hook
    setSelectedRepo('')
  }

  const mapCommits = () => {
    // first filter all commits array to get at most maxCommitCount commits
    const firstCommits = commits.filter((c, i) => {
      if (i < maxCommitCount) {
        return c
      }
    })

    // map the remaining commits and return react elements
    return (firstCommits.map((c,i)=><Commit key={i} commit={c.commit}/>))
  }

  return (<div>
            <button onClick={onClick}>Back</button>
            {selectedRepo}
            {mapCommits()}
          </div>)
  }

export default CommitList
