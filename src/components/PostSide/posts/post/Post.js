import React from 'react'
import style from './Post.module.css'
import like from '../../../../img/like.png'
import notlike from '../../../../img/notlike.png'

import share from '../../../../img/share.png'
import comment from '../../../../img/comment.png'

const Post = (props) => {
    console.log(props.data);
  return (
    <div className={style.post}>
      <img src={props.data.image} alt="" />

      <div className={style.postReaction}>
        <img src={props.data.liked?like:notlike} alt="" />
        
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <span>{props.data.likes} Likes</span>
      <div className={style.descriptions}>
        <span><b>{props.data.name}</b></span>
        <span> {props.data.description}</span>
      </div>
    </div>
  )
}

export default Post