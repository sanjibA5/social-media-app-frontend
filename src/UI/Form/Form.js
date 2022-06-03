import React from 'react'
import style from './Form.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = (props) => {
    // console.log(props)
    return (
        <form className={style.infoform}>
            <h3>{props.formh3}</h3>
           {
               props.formInputdata.map((inp,index)=>{
                //    console.log('formInputdata')
                   return (
                       <div key={index}>

                        <Input  dataProps={inp} />
                       </div>
                   )
               })
           }

            <span style={{ fontSize: '12px' }}>{props.formSpanText}</span>

            <Button style={style.signupbtn}>{props.btnText}</Button>
        </form>
    )
}

export default Form

/*
 <div>
                <Input dataProps={
                    {
                        name: "firstname",
                        placeholder: "Enter Your First name",
                        type: "text",

                    }
                } />
                <div/>
                <div>
                <Input dataProps={
                    {
                        name: "firstname",
                        placeholder: "Enter Your First name",
                        type: "text",

                    }
                } />
            </div>
            <div>

                <Input dataProps={
                    {
                        name: "username",
                        placeholder: "Enter the username",
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
                <Input dataProps={
                    {
                        name: "ConfirmPassword",
                        placeholder: "Confirm username",
                        type: "password",

                    }
                } />


            </div> */