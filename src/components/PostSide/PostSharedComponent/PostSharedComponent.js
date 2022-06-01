import React, { useState, useRef } from 'react'
import style from './PostSharedComponent.module.css'

import profileImg from '../../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes} from '@iconscout/react-unicons'
import Button from '../../../UI/Button/Button'
const PostSharedComponent = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const imageChangeHandaler = (event) => {

        if (event.target.files && event.target.files[0]) {
            let image=URL.createObjectURL(event.target.files[0])
            setImage(image )
        }
    }
    return (

        <div className={style.shaerePost}>
            <img src={profileImg} alt="profile" />

            <div>
                <input type="text" placeholder="What's in your mind........" />

                <div className={style.sharedoptions} style={{ color: "#4CB256" }}>
                    <div className={style.icon}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className={style.icon} style={{ color: "#4A4EB7" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className={style.icon} style={{ color: "#EF5757" }}>
                        <UilLocationPoint />
                        Locatio
                    </div>
                    <div className={style.icon} style={{ color: "#E1AE4A" }}>
                        <UilSchedule />
                        Schedule
                    </div>

                    <Button style={style.postButton}>Post</Button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='myImage' ref={imageRef} onChange={imageChangeHandaler} />
                    </div>
                </div>
                {
                 image &&   <div className={style.piviewImage} >
                     <UilTimes onClick={()=>{setImage(null)}}/>
                     
                     <img src={image} alt="" />

                 </div>
                }


            </div>
        </div>


    )

}
// //             {
//     image &&
//     <div className='piviewImage'>
//         <UilTimes onClick={()=>{setImage(null)}}/>
//         <div>
//             <img src={image} alt="" /> 
//         </div>
//     </div>
// }


export default PostSharedComponent;
