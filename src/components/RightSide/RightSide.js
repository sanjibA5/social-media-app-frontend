import React, { useState } from 'react'
import style from './RightSide.module.css'
import noti from '../../img/noti.png'
import home from '../../img/home.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import Trends from './Trends/Trends'
import Button from '../../UI/Button/Button'
import SareModal from '../../UI/Modal/SareModal'




const RightSide = () => {
  const [isShareModal,setIsShareModal]=useState(false)
  const shareButtonHandaler=()=>{
    console.log("Share Button click Hadaler");
    setIsShareModal(true)
  }
  return (
    <div className={style.RightSide}>
      <div className={style.navIcon}>
        <img src={home} alt="" />
        <UilSetting />
        <img src={noti} alt="" />
        <img src={comment} alt="" />

      </div>
      <Trends />


      <Button onClick={shareButtonHandaler}>Share</Button>
      <SareModal modalOpen={isShareModal} setModalOpen={setIsShareModal}/>
      

    </div>
  )
}

export default RightSide