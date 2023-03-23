/*
    Header component implementation
*/

export default function Navigation() {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                {/* Navbar brand element */}
                <a class="navbar-brand" href="#">Navbar</a>

                {/* Hamburger icon */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Mobile collapsable list */}
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                {/* Navigation bar list */}
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}