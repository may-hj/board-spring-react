import React from 'react'
import { Link } from 'react-router-dom'

import 'common/style/Common.css'

const Navbar = () => {
    return (<>
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
            </button>
            <Link to="/" className="navbar-brand" >HOME</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/board/news">NEWS</Link></li>
                <li><Link to="/board/seoul-cctv">CCTV</Link></li>
                <li><Link to="/counter/counter">COUNTER</Link></li>
                <li><Link to="/counter/redux-counter">REDUX_DOUNTER</Link></li>
            </ul>
            </div>
        </div>
    </nav>
    </>)
}

export default Navbar