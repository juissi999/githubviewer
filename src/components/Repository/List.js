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
  const user = useParams().user

  // get repositories from api when value of user changes
  useEffect(()=> {
    const request = ghGetter.getRepos(user)
    request.then((response) => {
      setUsername(user)
      setRepos(response)
    })
    .catch(error => {
      setUsername('')
      setRepos([])
      clearTimeout(errorTimeout)
      setErrorMsg(`${error}`)
      errorTimeout = setTimeout(()=>setErrorMsg(''), 2000)
    })
  }, [user])

  return (<div>
            <Error>{errorMsg}</Error>
            <UserHeader>{userName}</UserHeader>
            <ul>
              {repos.map((repo, i) => {
                return(<Repository key={i} user={user} repo={repo}/>)
              })}
            </ul>
          </div>)
}

export default RepositoryList
