import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
 
  return (
   <button onClick={props.onClick?props.onClick:()=>{}} 
   className={props.style?` ${props.style} ${style.btn}`:style.btn}>
     {props.children}
     </button>
  )
}
export default Button;
