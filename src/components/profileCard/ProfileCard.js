import React from 'react'
import style from './ProfileCard.module.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
const ProfileCard=() =>{
  return (
    <div className={style.profileCard}>
        <div className={style.profileimages}>
            <img src={cover} alt="cover" />
            <img src={profile} alt="prfile" />
        </div>
        <div className={style.ProfileName}>
            <span>Puja Das</span>
            <span>Single</span>

        </div>

        <div className={style.followStatus}>
            <hr />
            <div>
                <div className={style.follow}>
                    <span>600</span>
                    <span>Following</span>
                </div>
                <div className={style.vl}> <hr /> </div>
                <div className={style.follow}>
                    <span>6</span>
                    <span>Follower</span>
                </div>
              
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ProfileCard