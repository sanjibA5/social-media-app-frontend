import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import style from './UserCardInfo.module.css'
import Button from '../../../UI/Button/Button'
import ProfileModal from '../../../UI/Modal/Modal'

const UserCardInfo = () => {
    const [isOpenModal,setIsOpenModal]=useState(false)
    return (
        <div className={style.UserCardInfo}>
            <div className={style.infoCard}>
                <h4>Your Info</h4>
                <div >

                <UilPen width='2rem' height='1.2rem' onClick={()=>setIsOpenModal(true)}/>
                <ProfileModal modalOpen={isOpenModal} setModalOpen={setIsOpenModal}/>
                
                </div>
                <div className="info">
                    <span><b>Status : </b></span>
                    <span>In a Relationship</span>
                </div>

                <div className="info">
                    <span><b>Lives in  : </b></span>
                    <span>India</span>
                </div>

                <div className="info">
                    <span><b>Works in  : </b></span>
                    <span>Tcs</span>
                </div>

            </div>
        <Button style={style.logoutbtn}>Log out</Button>
            
        </div>
    )
}

export default UserCardInfo