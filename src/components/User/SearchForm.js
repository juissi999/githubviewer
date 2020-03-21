import React, {useState} from 'react'
import ghGetter from '../../ghGetter.js'
import Error from '../Error'

const UserSearchForm = ({setSelectedUser, setRepos}) => {

  let errorTimeout = null

  const [formUserName, setFormUserName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (event) => {
    setFormUserName(event.target.value)
  }

  const onSubmit = (event) => {
    // callback on form submit
    // set selected user hook and repos hook to
    // cause re-rendering on repos list
    event.preventDefault()

    const userName = formUserName
    const request = ghGetter.getRepos(userName)
    request.then((response) => {
      setSelectedUser(userName)
      setRepos(response)
    })
    .catch(error => {
      setRepos([])
      clearTimeout(errorTimeout)
      setErrorMsg(`${error}`)
      errorTimeout = setTimeout(()=>setErrorMsg(''), 2000)
    })
  }

  return (<div>
            <form onSubmit={onSubmit} className={'usersearch'}>
            <input onChange={onChange} value={formUserName}/>
            <button type={'submit'}>Find user</button>
            </form>
            <Error>{errorMsg}</Error>
          </div>
          )
}

export default UserSearchForm
