import React from 'react'
import style from './Input.module.css'

const Input = (props) => {
  // console.log(props.dataProps)    
  return (
    <input type={props.dataProps.type} name={props.dataProps.name} className={style.userinfoinput} placeholder={props.dataProps.placeholder}/>
  )
}

export default Input