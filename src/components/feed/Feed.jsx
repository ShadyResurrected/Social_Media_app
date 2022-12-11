import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'

import './feed.css'

const feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default feed