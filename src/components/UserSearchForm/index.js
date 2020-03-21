import React, {useState} from 'react'
import ghGetter from '../../ghGetter.js'

const UserSearchForm = ({setSelectedUser, setRepos}) => {
  const [formUserName, setFormUserName] = useState('')

  const onChange = (event) => {
    setFormUserName(event.target.value)
  }

  const onClick = () => {
    
    const userName = formUserName
    const request = ghGetter.getRepos(userName)
    request.then((response) => {
      setSelectedUser(userName)
      setRepos(response)
    })
  }

  return (<div>
    <input onChange={onChange} value={formUserName}/>
    <button onClick={onClick}>Find user</button>
    </div>)
}

export default UserSearchForm
