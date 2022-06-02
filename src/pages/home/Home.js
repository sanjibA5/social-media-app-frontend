import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import Profile from '../../components/profile/Profile'
import RightSide from '../../components/RightSide/RightSide'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.Home}>
        <Profile />
        
        <PostSide />
        <RightSide />
    
    
    </div>
  )
}

export default Home