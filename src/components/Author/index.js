import React, {useState} from 'react'
import AuthorName from './Name'
import AuthorAvatar from './Avatar'
import AuthorDate from './Date'

const Author = ({name, commitdate, avatar_url}) => {

  const [divClass, setDivClass] = useState('author')

  const renderDate = (ghdate) => {
    // clear the daystring to be more human readable
    const d = new Date(ghdate)
    return (d.toLocaleDateString("fi-FI"))
  }

  const onClick = () => {
    // swap class for the element (purpose: to allow zoom)
    divClass === 'author' ? setDivClass('authorclicked'):setDivClass('author')
  }

  return (<div className={divClass} onClick={onClick}>
            <AuthorAvatar url={avatar_url}/>
            <AuthorName name={name}/>
            <AuthorDate date={renderDate(commitdate)}/>
          </div>)
}

export default Author
