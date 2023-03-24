/*
    Login form component
*/

// CSS imports
import styles from './loginForm.module.css'

export default function LoginForm() {
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
                        required />
                </div>

                {/* Password input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                            className="form-label">Password</label>
                    <input type="password" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder='*******' 
                            required />
                </div>

                {/* Login button */}
                <button type="submit" 
                        className="btn btn-light align-self-center mb-3">Login</button>
                
                {/* Registration text */}
                <p className='align-self-center'>
                    Not registered? Click <a href='/register'><u>here</u></a> and register now.
                </p>
            </form>
        </div>
        </>
    )
}