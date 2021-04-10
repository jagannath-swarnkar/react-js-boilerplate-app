import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/buttons'
import CustomCheckbox from '../../components/checkbox'
import Input from '../../components/input'
import { setSessionData, showToast } from '../../lib/global'
import { getLocalStorage, removeLocalStorageKey, setLocalStorage } from '../../lib/session'
import {LOGIN_POSTER} from '../../lib/config';
import { loginApi } from '../../services/login.service'

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(Boolean(getLocalStorage('rememberMe')))
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(rememberMe){
            const i_email = getLocalStorage('email');
            const i_password = getLocalStorage('password');
            setEmail(i_email);
            setPassword(i_password)
        }
    },[])
    

    const handleFormInput = (event, key) => {
        const value = event.target.value;
        switch(key){
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                return
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        if(!email || !password) {
            showToast("Email and password fields are requrired!", 'error')
        };

        if(rememberMe){
            setLocalStorage('rememberMe', true);
            setLocalStorage('email', email);
            setLocalStorage('password', password);
        }else{
            removeLocalStorageKey('rememberMe')
            removeLocalStorageKey('email')
            removeLocalStorageKey('password')
        }
        const payload = {email, password}

        // call login api and redirect to homepage
        loginApi(payload).then(res=>{
            setLoading(false)
            if(res && res.data && res.data.data){
                showToast(res.data.message, 'success')
                setLocalStorage('token', res.data.data.token)
                history.push('/');
                setSessionData(res.data.data)
            }
        }).catch(error=>{
            console.error(error)
            setLoading(false)
            showToast(error?.response?.data?.message || "Falied to login!", 'error')
        })
    }
    

    const handleRememberMe = (event) => {
        const value = event.target.checked || false;
        setRememberMe(value)
    }

    
    return (
        <div className="login_page">
            <div id="overlay"></div>
            <div className='login p-3 d-flex justify-content-center align-items-center'>
                <div className='login__container d-flex'>
                    <div className='login__image'>
                        <img src={LOGIN_POSTER} />
                    </div>
                    <div className='form__section  border d-flex flex-column align-items-center container pt-3'>
                        <h2>Login </h2>
                        <form onSubmit={handleSubmitForm} className='form'>
                            <div className='input__box mb-3'>
                                <p  className="mb-0 text-start">Email</p>
                                <Input
                                    className="input__textField mt-2"
                                    type='email'
                                    name="email"
                                    id='email'
                                    onChange={(e)=>handleFormInput(e,'email')}
                                    value={email}
                                    placeholder='Email' />
                            </div>
                            <div className='input__box mb-3'>
                                <p className="mb-0 text-start">Password</p>
                                <Input
                                    className="input__textField mt-2"
                                    type='password'
                                    name="password"
                                    id='password'
                                    value={password}
                                    onChange={(e)=>handleFormInput(e,'password')}
                                    placeholder='Password' />
                            </div>
                            <div className='remember__forgetPass d-flex justify-content-between px-2'>
                                <CustomCheckbox
                                    label="Remember Me"
                                    checked={rememberMe}
                                    onChange={handleRememberMe}
                                    className='m-0 p-0'
                                />
                                {/* <a className='m-0 p-0'>Forget Password</a> */}
                            </div>
                            <Button
                                type='submit'
                                role="button"
                                className='login_btn'>
                                {loading ? "loading..." : "Log In"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
