import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

import './profile.css'
import { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    const PF = import.meta.env.VITE_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('http://localhost:8800/api/users?username=JohnDoe')
            setUser(res.data)
        }
        fetchUser()
    }, [])
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverPicture || PF+"person/def_cover_img.jpg"} alt="" />
                            <img className='profileUserImg' src={user.profilePicture || PF+"person/def_img.png"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className='profileInfoDesc'>{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="JohnDoe"/>
                        <Rightbar user={user}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile