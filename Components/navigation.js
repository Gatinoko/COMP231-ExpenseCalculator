/*
    Header component implementation
*/

export default function Navigation() {
    return(
        <>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">

            {/* Navbar brand */}
            <a class="navbar-brand" href="#">Navbar</a>

            {/* Mobile toggler button */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            {/* Mobile toggler bar */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                {/* Options */}
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
        </>
    )
}