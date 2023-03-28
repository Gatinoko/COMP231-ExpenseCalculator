/*
    Login form component
*/
// React/Next imports
import { useRouter } from 'next/router';

// CSS imports
import styles from './loginForm.module.css'

export default function LoginForm({ valid, alertMessage }) {

    // Converts valid parameter from string to bool
    let validBool = undefined;
    if (valid !== undefined) { validBool = !(/false/i).test(valid) }

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
                    <label htmlFor="emailInput" 
                        className="form-label">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="emailInput" 
                        placeholder="name@example.com"
                        name='email'
                        required />
                </div>

                {/* Password input field */}
                <div className="mb-3">
                    <label htmlFor="passwordInput" 
                            className="form-label">Password</label>
                    <input type="password" 
                            className="form-control" 
                            id="passwordInput" 
                            placeholder='*******'
                            name='password' 
                            required />
                </div>

                {/* Login button */}
                <button type="submit"
                        formMethod='POST' 
                        className="btn btn-light align-self-center mb-3">Login</button>
                
                {/* Registration text */}
                <p className='align-self-center'>
                    Not registered? Click <a href='/register'><u>here</u></a> and register now.
                </p>

                {/* Alert message */}
                {
                    validBool === false ? (
                        <div id='AlertBox' className="alert alert-warning" role="alert">
                            {alertMessage}
                        </div>
                    ) : (
                        <div id='AlertBox' role="alert"></div>
                    )
                }
            </form>
        </div>
        </>
    )
}