import React from 'react'
import style from './RightSide.module.css'
import noti from '../../img/noti.png'
import home from '../../img/home.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import Trends from './Trends/Trends'
import Button from '../../UI/Button/Button'


const RightSide = () => {
  return (
    <div className={style.RightSide}>
      <div className={style.navIcon}>
        <img src={home} alt="" />
        <UilSetting />
        <img src={noti} alt="" />
        <img src={comment} alt="" />

      </div>
      <Trends />

      <Button>Share</Button>
    </div>
  )
}

export default RightSide