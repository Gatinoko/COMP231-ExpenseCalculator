/*
    Login form component
*/

// CSS imports
import { useState } from 'react'
import styles from './loginForm.module.css'

export default function LoginForm() {

    const [getEmail, setEmail] = useState();
    const [getPassword, setPassword] = useState();

    function loginButtonOnClick() {
        console.log(getEmail)
        console.log(getPassword)
    }

    return(
        <>
        <div className='container d-flex justify-content-center'>
            <form className={`d-flex flex-column p-3 mx-5 shadow rounded ${styles['login-form']}`}>

                {/* User login header */}
                <div className='mb-3'>
                    <h1>User Login</h1>
                </div>

                {/* Email address input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        required
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                {/* Password input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                            className="form-label">Password</label>
                    <input type="password" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder='*******' 
                            required
                            onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                {/* Login button */}
                <button type="button" 
                        className="btn btn-light align-self-center mb-3"
                        onClick={ loginButtonOnClick }>Login</button>
                
                {/* Registration text */}
                <p className='align-self-center'>
                    Not registered? Click <a href='/register'><u>here</u></a> and register now.
                </p>
            </form>
        </div>
        </>
    )
}