import React, {useState, useEffect}  from 'react'
import Error from '../Error/'
import Commit from './'
import ghGetter from '../../ghGetter'

const maxCommitCount = 10

const CommitList = ({selectedUser, selectedRepo}) => {

  let errorTimeout = null

  const [commits, setCommits] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // use effect hook to query commits for this repository at start
    ghGetter.getCommits(selectedUser, selectedRepo)
    .then((c) => {
      setCommits(c)
    })
    .catch(error=>{
      clearTimeout(errorTimeout)
      setErrorMsg(`${error}`)
      errorTimeout = setTimeout(()=>setErrorMsg(''), 2000)
    })
  }, [])

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
            <Error>{errorMsg}</Error>
            <div>
              {mapCommits()}
            </div>
          </div>)
  }

export default CommitList
