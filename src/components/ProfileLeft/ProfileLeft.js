import React from 'react'
import style from './ProfileLeft.module.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import UserCardInfo from './UserCardInfo/UserCardInfo'

const ProfileLeft = () => {
  return (
    <div className={style.ProfileLeft}>
      <LogoSearch />
      <UserCardInfo />
      <FollowersCard/>
      
    </div>
  )
}

export default ProfileLeft