import React from 'react'
import style from './Auth.module.css'
import logo from '../../img/logo.png'
import Signup from '../../components/Signup/Signup'
import Login from '../../components/Login/Login'

const Auth = () => {
    return (
        <div className={style.Auth}>
            <div className={style['a-left']}>
                <img src={logo} alt="" />
                <div className={style.brandName}>
                   <h1>Practice Media</h1>
                   <h6>Explore the World</h6> 
                </div>
            </div>
            <Login />
            {/* <Signup /> */}
        </div>
    )
}

// another comp(FORM)


export default Auth
