import React, {useState} from 'react'
import ghGetter from '../../ghGetter.js'

const UserNameForm = ({setRepos}) => {
  const [formUserName, setFormUserName] = useState('')

  const onChange = (event) => {
    setFormUserName(event.target.value)
  }

  const onClick = () => {
    
    const request = ghGetter.getRepos(formUserName)
    request.then((response) => {
      setRepos(response)
    })
  }

  return (<div>
    <input onChange={onChange} value={formUserName}/>
    <button onClick={onClick}>Find user</button>
    </div>)
}

export default UserNameForm
