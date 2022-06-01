import React from 'react'
import {PostData} from '../../../Data/PostData'
import style from './Posts.module.css'
import Post from './post/Post'

const Posts = () => {
  return (
    <div className={style.posts}>
      {
        PostData.map((post)=>{
          return <Post key={post.id} data={post}/>
        })
      }

    </div>
  ) 
}

export default Posts