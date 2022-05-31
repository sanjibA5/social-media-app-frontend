import React from 'react'
import style from './Profile.module.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'

export default function Profile() {
  return (
   <div className={style.profileSide}>
       <LogoSearch />
       <ProfileCard />
       
   </div>
  )
}
