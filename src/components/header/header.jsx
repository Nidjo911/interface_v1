import React from 'react'

export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-light justify-content-center">
                    <a className="navbar-brand" href="/home">Home</a>
                    <a className="navbar-brand" href="/calculation">Calculator</a>
                    <a className="navbar-brand" href="#kontakt">Y</a>
                </nav>

                <div className="headline">
                    <p><span>Basic profile calculator</span></p>
                    <p><span>Use it wisely!</span></p>
                </div>
            </header>

        </>
    );

}