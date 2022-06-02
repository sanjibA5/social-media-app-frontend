import React from 'react'

import Posts from '../../components/PostSide/posts/Posts'
import ProfileCard from '../../components/profileCard/ProfileCard'


import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileUser from '../../components/ProfileUser/ProfileUser'
import RightSide from '../../components/RightSide/RightSide'
import style from './Profile.module.css'

export default function Profile() {
    return (
        <div className={style.Profile}>
            <ProfileLeft />
            <div className="profileCenter">
                <ProfileCard/>
                <br />
                <Posts />
            
              

            </div>
            <RightSide />
        </div>
    )
}
{/* <div>
<ProfileUser />
</div> */}