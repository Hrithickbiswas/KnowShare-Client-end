import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import ReCAPTCHA from "react-google-recaptcha";
// npm i react-google-recaptcha

import './Auth.css'
import icon from '../../assets/icon3.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'


const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({ email, name, password })
        
        if (!email && !password) {
            alert("Please enter an email and password to continue!");
            return;
        }
        // else{
        //     if(!password && email){
        //         alert("Please enter an password to continue!")
        //     }else{
        //         if(password && !email){
        //             alert("Please enter an email to continue!")
        //         }
        //     }
        // }
        
        if (isSignup && !name) {
            alert("Enter a name to continue");
            return;
        }
        if (isSignup) {
            dispatch(signup({ name, email, password }, navigate));
        } else {
            dispatch(login({ email, password }, navigate));
        }
    };

    return (
        <section className='auth-section'>
            { isSignup && <AboutAuth/> }

            <div className='auth-container-2'>
                { !isSignup && <img src={icon} alt="stack overflow" className='login-logo' /> }  
                {/* this fetches the logo from icon present in assets in line3*/}

                <form onSubmit = { handleSubmit }>

                    {
                        isSignup && (
                            
                            <label htmlFor="name">
                                <h3>Display Name</h3>
                                <input type="text" id='name' name='name' onChange={(e)=> {setName(e.target.value)}}/>
                            </label>
                        )
                        
                    }

                    <label htmlFor="email">
                        <h3>Email</h3>
                        <input type="email" name='email' id='email' onChange={(e)=> {setEmail(e.target.value)}}/>
                    </label>

                    <label htmlFor="password">
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>Password</h3>
                        { !isSignup && <p style={{ color :'#007ac6' , fontSize:"13px"}}>forgot password?</p>}
                        </div>
                        <input type="password" name='password' id='password' onChange={(e)=> {setPassword(e.target.value)}}/>
                        { isSignup && <p style={{ color :"#666767", fontSize :"13px"}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number.</p> }
                    </label>

                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id='check' />
                                <p style={{ fontSize :"13px"}}>Opt-in to receive occasional product<br/> updates, user research invitations, company<br/> announcements, and digests.</p>
                            </label>
                        )
                    }

                    <ReCAPTCHA 
                        style={{ display: "flex", justifyContent: "center" }}
                        sitekey="6LdlQV0lAAAAAD_vME3JuTCvbGJPn3xYLaSKJWA1"
                        onChange={onChange}
                    />

                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in' }</button>
                    {
                        isSignup && (
                            <p style={{ color :"#666767", fontSize :"13px"}} >
                                By clicking “Sign up”, you agree to our 
                                <span style={{ color :"#007ac6" }}> terms of<br/> service</span>, 
                                <span style={{ color :"#007ac6" }}> privacy policy</span> and 
                                <span style={{ color :"#007ac6" }}> cookie policy</span>
                            </p>
                        )
                    }
                    
                </form>

                <p>
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                </p>

            </div>
        </section>
    )
}

export default Auth