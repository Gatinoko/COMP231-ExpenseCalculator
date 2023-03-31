/*
    Registration form component
*/

// CSS imports
import styles from './registrationForm.module.css'

export default function RegistrationForm({ valid, alertMessage, messageType }) {

    // Converts valid parameter from string to bool
    let validBool = undefined;
    if (valid !== undefined) { validBool = !(/false/i).test(valid) }
    
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
                        name="email" 
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
                        name="confirmEmail" 
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
                        name="username" 
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
                            name="password" 
                            required />
                </div>

                {/* Login button */}
                <button type="submit"
                        formMethod='POST' 
                        className="btn btn-light align-self-center mb-3">Register</button>
                
                {/* Registration text */}
                <p className='align-self-center'>
                    Already registered? Click <a href='/register'><u>here</u></a> to login.
                </p>

                {/* Alert message */}
                {
                    validBool === false ? (
                        <div id='AlertBox' className={`alert alert-${messageType}`} role="alert">
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