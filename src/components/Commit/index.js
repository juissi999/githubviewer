import React from 'react'
import CommitMsg from './Msg.js'
import Author from '../Author/'

const Commit = ({commit}) => {
  return (<div className={'commit'}>
            <Author name={commit.commit.author.name} commitdate={commit.commit.author.date} avatar_url={commit.author.avatar_url}/>
            <CommitMsg>{commit.commit.message}</CommitMsg>
          </div>)
}

export default Commit
