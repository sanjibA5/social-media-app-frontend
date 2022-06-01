import React from 'react'
import Posts from './posts/Posts'
import PostSharedComponent from './PostSharedComponent/PostSharedComponent'
import style from './PostSide.module.css'

export default function PostSide() {
  return (
    <div className={style.upper}>
        <PostSharedComponent />
        <Posts />
    </div>
  )
}
