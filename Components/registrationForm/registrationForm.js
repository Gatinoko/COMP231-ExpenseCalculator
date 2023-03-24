/*
    Registration form component
*/

// CSS imports
import styles from './registrationForm.module.css'

export default function RegistrationForm() {
    return(
        <>
        <div className='container d-flex justify-content-center'>
            <form className={`d-flex flex-column p-3 mx-5 shadow rounded ${styles['registration-form']}`}>
                {/* User login header */}
                <div className='mb-3'>
                    <h1>User Registration</h1>
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

                {/* Confirm email address input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Confirm email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com" 
                        required />
                </div>

                {/* Username input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="NameExample32" 
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
                        className="btn btn-light align-self-center mb-3">Register</button>
                
                {/* Registration text */}
                <p className='align-self-center'>
                    Already registered? Click <a href='/register'><u>here</u></a> to login.
                </p>
            </form>
        </div>
        </>
    )
}