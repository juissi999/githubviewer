import React from 'react'
import AuthorName from './Name.js'
import AuthorAvatar from './Avatar.js'
import AuthorDate from './Date.js'

const Author = ({name, commitdate, avatar_url}) => {

  const renderDate = (ghdate) => {
    // clear the daystring to be more human readable
    const d = new Date(ghdate)
    return (d.toLocaleDateString("fi-FI"))
  }

  return (<div className={'author'}>
          <AuthorAvatar url={avatar_url}/>
          <AuthorName name={name}/>
          <AuthorDate date={renderDate(commitdate)}/>
          </div>)
}

export default Author
