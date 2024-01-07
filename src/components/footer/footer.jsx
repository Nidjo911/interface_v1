import React from 'react'
import { Fragment } from 'react'

import '../../app/normalize.css'
import '../../app/style.css'

export default function Footer() {

    return (
        <Fragment>
            <footer id="footer" className="footer mt-4 mt-lg-4 mt-md-2">
                <div className="container">
                    <p className="text-center">Copyright @2023 | Developed by Johnny</p>
                </div>
            </footer>
        </Fragment>
    )
}