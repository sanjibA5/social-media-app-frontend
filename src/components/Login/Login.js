import React from 'react'
import style from '../Signup/Signup.module.css'

import Form from '../../UI/Form/Form'

const formInputdata = [


    {
        name: "username",
        placeholder: "Enter username",
        type: "text",

    },
    {
        name: "password",
        placeholder: "Enter the Password",
        type: "password",

    },


]


export default function Login() {
    return (
        <div className={style['a-right']}>

            <Form
                formInputdata={formInputdata}
                formh3={"Log In"}
                btnText={"Log In"}
                formSpanText={"Don't Have an Account Create Here!"}
            />
        </div>
    )
}


/* 
    <form className={style.infoform} style={{width:'333px',gap:'3rem'}}>
        <h3>Log in</h3>
        <div>
            <Input dataProps={
                {
                    name: "usename",
                    placeholder: "Enter Your usename",
                    type: "text",

                }
            } />
        </div>

        <div>

            <Input dataProps={
                {
                    name: "password",
                    placeholder: "Enter the password",
                    type: "password",

                }
            } />
        </div>

        <span style={{fontSize:'12px'}}>Don't Have Account Create Here!</span>

        <Button style={style.signupbtn}>Login</Button>
    </form>
    */