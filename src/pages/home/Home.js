import React from 'react'
import Profile from '../../components/profile/Profile'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.Home}>
        <Profile />
        <div className={style.postside}>Post</div>
        <div className={style.rightSide}>Right side</div>
    </div>
  )
}

export default Home