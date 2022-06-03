import React from 'react'
import Form from '../../UI/Form/Form'
import style from './Signup.module.css'
const formInputdata = [
    {
        name: "firstname",
        placeholder: "Enter Your First name",
        type: "text",

    },
    {
        name: "lastname",
        placeholder: "Enter Your Last name",
        type: "text",

    },
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
    {
        name: "password",
        placeholder: "Confirm Password",
        type: "password",

    },

]

function Signup() {
    return (
        <div className={style['a-right']}>
            <Form 
            formInputdata={formInputdata} 
            formh3={"Sign up"} 
            btnText={"Sgn Up"}
            formSpanText={"Already Have Account Login!"}
            />

        </div>
    )
}

/*

            <form className={style.infoform}>
                <h3>Sign up</h3>
                <div>
                    <Input dataProps={
                        {
                            name: "firstname",
                            placeholder: "Enter Your First name",
                            type: "text",

                        }
                    } />

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


                </div>

                <span style={{fontSize:'12px'}}>Already Have Account Login!</span>

                <Button style={style.signupbtn}>SignUp</Button>
            </form>
 */

export default Signup