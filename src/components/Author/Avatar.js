import React from 'react'

const AuthorAvatar = ({url}) => {

  if (url!==null) {
    return (<div className={'authoravatar'}><img src={url}/></div>)
  } else {
    return (<div className={'authoravatar'}></div>)
  }
}

export default AuthorAvatar
