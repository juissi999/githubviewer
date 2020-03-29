import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

const UserSearchForm = () => {

  const [formUserName, setFormUserName] = useState('')
  const history = useHistory()

  const onChange = (event) => {
    setFormUserName(event.target.value)
  }

  const onSubmit = (event) => {
    // callback on form submit
    event.preventDefault()

    history.push(`/${formUserName}`)
  }
        
  return (<div>
            <form onSubmit={onSubmit} className={'usersearch'}>
            <input onChange={onChange} value={formUserName}/>
            <button type={'submit'}>Find user</button>
            </form>
          </div>)
}

export default UserSearchForm
