import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'

import logo from '../img/logo.png'


export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
            <p id="logo"> <Link to="/"><img src={logo} alt=""/></Link> </p>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/posts" activeClassName="active">Posts</NavLink></li>
                    <li><NavLink exact to="/recent-posts" activeClassName="active">Recent</NavLink></li>
                    <li><NavLink exact to="/popular-posts" activeClassName="active">Popular</NavLink></li>
                    <li><NavLink exact to="/about-us" activeClassName="active">About us</NavLink></li>
                </ul>
            </nav>
                <ul className="icons">
                    <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                <Hamburger /> 
                </div>
        </header>
        )
    }
}

export default Header
