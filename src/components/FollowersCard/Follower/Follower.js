import React from 'react'
import style from './Follower.module.css'

export default function Follower(props) {
  return (
   <div className={style.follower}>
       <div>
           <img src={props.data.image} alt="profile" className={style.followerimage} />
           <div className={style.name}>
               <span>{props.data.name}</span>
               <span>@{props.data.username}</span>
           </div>
       </div>
       <button>Follow</button>
   </div>
  )
}
