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
            <Link to="/" className="navbar-brand" >Me</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">WHO</a></li>
                <li><a href="#">WHAT</a></li>
                <li><a href="#">WHERE</a></li>
                <li><Link to="/board/news">NEWS</Link></li>
                <li><Link to="/article/seoul-cctv">CCTV</Link></li>
                <li><Link to="/board/counter">Counter</Link></li>
                <li><Link to="/board/redux-counter">ReduxCounter</Link></li>
            </ul>
            </div>
        </div>
    </nav>
    </>)
}

export default Navbar