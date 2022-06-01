import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
  // console.log(props.style);
  return (
   <button className={props.style?` ${props.style} ${style.btn}`:style.btn}>{props.children}</button>
  )
}
export default Button;
