import React from 'react'
import style from './FollowersCard.module.css'
import {follower} from '../../Data/FollowersData'
import Follower from './Follower/Follower'
export default function FollowersCard() {
  return (
    <div className={style.FollowersCard}>
      <h3>Who is Followng You</h3>
     {
       follower.map(
         (data)=>{
          return <Follower data={data} key={data.id}/>
         }
       )
     }
    </div>
  )
}
