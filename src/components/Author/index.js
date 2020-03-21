import React from 'react'
import AuthorName from './Name.js'
import AuthorAvatar from './Avatar.js'
import AuthorDate from './Date.js'

const Author = ({author}) => {
  return (<div className={'author'}>
          <AuthorName name={author.name}/>
          <AuthorDate date={author.date}/>
          <AuthorAvatar />
          </div>)
}

export default Author
