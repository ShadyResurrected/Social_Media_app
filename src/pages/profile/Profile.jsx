import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import './profile.css'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="assets\post\3.jpeg" alt="" />
                            <img className='profileUserImg' src="assets\person\4.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Name</h4>
                            <span className='profileInfoDesc'>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile