import React, {useState} from 'react'
import AuthorName from './Name'
import AuthorAvatar from './Avatar'
import AuthorDate from './Date'

const Author = ({name, commitdate, avatar_url}) => {

  const [classes, setClasses] = useState('author')

  const renderDate = (ghdate) => {
    // clear the daystring to be more human readable
    const d = new Date(ghdate)
    return (d.toLocaleDateString("fi-FI"))
  }

  const onClick = () => {
    classes === 'author' ? setClasses('authorclicked'):setClasses('author')
  }

  return (<div className={classes} onClick={onClick}>
          <AuthorAvatar url={avatar_url}/>
          <AuthorName name={name}/>
          <AuthorDate date={renderDate(commitdate)}/>
          </div>)
}

export default Author
