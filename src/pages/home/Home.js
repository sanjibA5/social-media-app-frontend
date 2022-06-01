import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import Profile from '../../components/profile/Profile'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.Home}>
        <Profile />
        
        <PostSide />
    
        <div className={style.rightSide}>Right side</div>
    </div>
  )
}

export default Home