import React, {useEffect, useState} from 'react'
import CommitMsg from './Msg'
import Author from '../Author/'

const Commit = ({commit}) => {

  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(()=> {
    if (commit.author !== null) {
      setAvatarUrl(commit.author.avatar_url)
    }
  }, [])

  return (<div className={'commit'}>
            <Author name={commit.commit.author.name} commitdate={commit.commit.author.date} avatar_url={avatarUrl}/>
            <CommitMsg>{commit.commit.message}</CommitMsg>
          </div>)
}

export default Commit
