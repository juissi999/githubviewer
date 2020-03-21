import React, {useState} from 'react'
import ghGetter from '../../ghGetter.js'

const UserSearchForm = ({setSelectedUser, setRepos}) => {
  const [formUserName, setFormUserName] = useState('')

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
  }

  return (<form onSubmit={onSubmit} className={'usersearch'}>
          <input onChange={onChange} value={formUserName}/>
          <button type={'submit'}>Find user</button>
          </form>)
}

export default UserSearchForm
