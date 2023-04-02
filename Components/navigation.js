// Next/React imports
import { useContext, useEffect } from "react";

// Component imports
import cookieHelper from "@/server/utils/cookieHelper"

/*
    Component functions and variables
*/
const loggedOutNav = [
    { id: 0, name: 'Login', href: '/login'},
    { id: 1, name: 'Register', href: '/register'}
]

const loggedInNav = [
    { id: 0, name: 'Logout', href: '/logout'},
    { id: 1, name: 'Expense Dashboard', href: '/dashboard'}
]

function configureNavigationBarList(auth) {
    const navigation = auth === false ? loggedOutNav : loggedInNav
    return navigation
}

function checkIfUserAuthenticated(serverProps) {
    const authenticated = serverProps.jwtTokenContent === null ? false : true
    return authenticated
} 

/*
    Navigation component implementation
*/
export default function Navigation({ serverProps }) {

    let auth = checkIfUserAuthenticated(serverProps)
    let navArray = configureNavigationBarList(auth)

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light shadow-sm position-absolute w-100">
            <div className="container-fluid">

                {/* Navbar brand element */}
                <a className="navbar-brand" href="/"><h2>Navbar</h2></a>

                {/* Hamburger icon */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Mobile collapsable list */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                    {/* Navigation bar list */}
                    <div className="navbar-nav">
                        {
                            navArray.map((route) => (
                                serverProps.currentPath === route.href ? (
                                    <a key={route.id} className="nav-link active" aria-current="page" href={route.href}>
                                        {route.name}
                                    </a>
                                ) : (
                                    <a key={route.id} className="nav-link" aria-current="page" href={route.href}>
                                        {route.name}
                                    </a>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}