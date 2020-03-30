import React, {useState, useEffect}  from 'react'
import {useParams} from "react-router-dom"

import Error from '../Error/'
import NavigationForm from '../Navigation/Form'
import Commit from './'
import ghGetter from '../../ghGetter'

const maxCommitCount = 10

const CommitList = () => {

  let errorTimeout = null

  const [commits, setCommits] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  // url parameters
  const user = useParams().user
  const repo = useParams().repo

  // query commits for this repository at start
  useEffect(() => {
    const request = ghGetter.getCommits(user, repo)
    request.then((c) => {
      setCommits(c)
    })
    .catch(error => {
      clearTimeout(errorTimeout)
      setErrorMsg(`${error}`)
      errorTimeout = setTimeout(()=>setErrorMsg(''), 2000)
    })
  }, [])

  const mapCommits = () => {
    // first filter all commits array to get at most maxCommitCount commits
    const firstCommits = commits.filter((c, i) => {
      if (i < maxCommitCount) {
        return true
      }
    })

    // map the remaining commits and return react elements
    return (firstCommits.map((c,i) => <Commit key={i} commit={c}/>))
  }

  return (<div>
            <NavigationForm user={user} repo={repo}/>
            <Error>
              {errorMsg}
            </Error>
            <div>
              {mapCommits()}
            </div>
          </div>)
  }

export default CommitList
