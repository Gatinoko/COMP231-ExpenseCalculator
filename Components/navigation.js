/*
    Header component implementation
*/

// Next/React imports
import { useRouter } from "next/router"

export default function Navigation() {
    const router = useRouter();
    console.log(router.pathname);
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container-fluid">

                {/* Navbar brand element */}
                <a className="navbar-brand" href="/home"><h2>Navbar</h2></a>

                {/* Hamburger icon */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Mobile collapsable list */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                {/* Navigation bar list */}
                <div className="navbar-nav">
                    {
                        router.pathname == '/login' ? (
                            <a className="nav-link active" aria-current="page" href="/login">Login</a>
                        ) : (
                            <a className="nav-link" aria-current="page" href="/login">Login</a>
                        )
                    }
                    {
                        router.pathname == '/register' ? (
                            <a className="nav-link active" href="/register">Register</a>
                        ) : (
                            <a className="nav-link" href="/register">Register</a>
                        )
                    }
                     {
                        router.pathname == '/ExpenseDashboard' ? (
                            <a className="nav-link active" href="/ExpenseDashboard">ExpenseDashboard</a>
                        ) : (
                            <a className="nav-link" href="/ExpenseDashboard">ExpenseDashboard</a>
                        )
                    }
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}