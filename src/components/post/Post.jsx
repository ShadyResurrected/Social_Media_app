import React from 'react'

import './post.css'

import MoreVertIcon from '@mui/icons-material/MoreVert';

const post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="\assets\person\1.jpeg" alt="" />
                    <span className="postUsername">Trial Name</span>
                    <span className="postDate">3 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hello first post</span>
                <img className='postImg' src="assets\post\1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets\like.png" alt="" />
                    <img className='likeIcon' src="assets\heart.png" alt="" />
                    <span className="postLikeCounter">14 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">3 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default post