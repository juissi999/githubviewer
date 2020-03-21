import React from 'react'
import AuthorName from './Name.js'
import AuthorAvatar from './Avatar.js'
import AuthorDate from './Date.js'

const Author = ({author}) => {

  const renderDate = () => {
    // clear the daystring to be more human readable
    const d = new Date(author.date)
    return (d.toLocaleDateString("fi-FI"))
  }

  return (<div className={'author'}>
          <AuthorName name={author.name}/>
          <AuthorDate date={renderDate(author.date)}/>
          <AuthorAvatar />
          </div>)
}

export default Author
