import React from 'react'
import CommitMsg from './Msg.js'
import Author from '../Author/'

const Commit = ({commit}) => {
  console.log(commit)
  return (<div className={'commit'}>
          <Author author={commit.author}/>
          <CommitMsg message={commit.message}/>
          </div>)
}

export default Commit
