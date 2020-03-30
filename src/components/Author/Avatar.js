import React from 'react'

const AuthorAvatar = ({url}) => {

  // if url is null, render only empty div, else render avatarimage
  if (url !== null) {
    return (<div className={'authoravatar'}>
              <img src={url}/>
            </div>)
  } else {
    return (<div className={'authoravatar'} />)
  }
}

export default AuthorAvatar
