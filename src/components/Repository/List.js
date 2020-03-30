import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

import Repository from './'
import Error from '../Error'
import UserHeader from '../User/Header'
import ghGetter from '../../ghGetter'

const RepositoryList = () => {

  let errorTimeout = null

  // hooks control what is rendered on current state
  const [errorMsg, setErrorMsg] = useState('')
  const [repos, setRepos] = useState([])
  const [userName, setUsername] = useState('')

  // url parameter
  const rawUser = useParams().user

  // get repositories from api when value of user changes
  useEffect(()=> {

    // get the actual username (case sensitive)
    // when username is gotten get repositories for the user
    // deal with all the errors in one catch-block
    ghGetter.getUser(rawUser)
      .then((userinfo) => {
        const user = userinfo.login
        setUsername(user)
        return ghGetter.getRepos(user)
      })
      .then((repositories) => {
        setRepos(repositories)
      })
      .catch((error)=> {
        setUsername('')
        setRepos([])
        clearTimeout(errorTimeout)
        setErrorMsg(`${error}`)
        errorTimeout = setTimeout(()=>setErrorMsg(''), 2000)
      })
  }, [rawUser])

  return (<div>
            <Error>
              {errorMsg}
            </Error>
            <UserHeader>
              {userName}
            </UserHeader>
            <ul>
              {repos.map((repo, i) => {
                return(<Repository key={i} user={userName} repo={repo}/>)
              })}
            </ul>
          </div>)
}

export default RepositoryList
