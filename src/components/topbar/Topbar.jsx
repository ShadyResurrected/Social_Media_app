import React from 'react'
import "./topbar.css"

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className='searchIcon'/>
                    <input className='searchInput' placeholder='Search for friend,post or video' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">4</span>
                    </div>
                </div>
                <img src="\assets\person\1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar