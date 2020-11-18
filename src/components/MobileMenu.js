import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { hideMenu } from '../redux/actions'

function MobileMenu({menu,hideMenu}) {
    function hide(e){
        if(e.target.closest('a') || e.target.classList.contains('close-menu')){
            hideMenu()
        }
    }
    return (
        <div className={(menu) ? 'active' : ''} id="mobile-menu">
            <div className="close-menu" onClick={hide}>
                <i className="fas fa-times"></i> 
            </div>
            <nav>
                <ul onClick={hide}>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/posts" activeClassName="active">Posts</NavLink></li>
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
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        menu: state.menu
    }
}
const mapDispatchToProps = {
    hideMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)