import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {

    return (
        <div>
                    {/* <!-- Header Container
                ================================================== --> */}
                <header id="header-container">
            
                    {/* <!-- Topbar --> */}
                    <div id="top-bar">
                        <div className="container">
            
                            {/* <!-- Left Side Content --> */}
                            <div className="left-side">
            
                                {/* <!-- Top bar --> */}
                                <ul className="top-bar-menu">
                                    <li><i className="fa fa-phone"></i> (123) 123-456</li>
                                    <li><i className="fa fa-envelope"></i> <a href="#">office@example.com</a></li>
                                    <li>
                                        <div className="top-bar-dropdown">
                                            <span>Dropdown Menu</span>
                                            <ul className="options">
                                                <li>
                                                    <div className="arrow"></div>
                                                </li>
                                                <li><a href="#">Nice First Link</a></li>
                                                <li><a href="#">Second Link With Long Title</a></li>
                                                <li><a href="#">Third Link</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
            
                            </div>
                            {/* <!-- Left Side Content / End --> */}
            
            
                            {/* <!-- Left Side Content --> */}
                            <div className="right-side">
            
                                {/* <!-- Social Icons --> */}
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
                                    <li><a className="pinterest" href="#"><i className="icon-pinterest"></i></a></li>
                                </ul>
            
                            </div>
                            {/* <!-- Left Side Content / End --> */}
            
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {/* <!-- Topbar / End --> */}
            
            
                    {/* <!-- Header --> */}
                    <div id="header">
                        <div className="container">
            
                            {/* <!-- Left Side Content --> */}
                            <div className="left-side">
            
                                {/* <!-- Logo --> */}
                                <div id="logo">
                                    <a href="unused/index-1.html"><img src="images/logo.png" alt=""/></a>
                                </div>
            
            
                                {/* <!-- Mobile Navigation --> */}
                                <div className="mmenu-trigger">
                                    <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                    </button>
                                </div>
            
            
                                {/* <!-- Main Navigation --> */}
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">
            
                                        <li><a href="#">Home</a>
                                            <ul>
                                                <li><a href="unused/index-1.html">Home 1</a></li>
                                                <li><a href="index1.html">Home 2</a></li>
                                                <li><a href="index.html">Home 3</a></li>
                                                <li><a href="unused/index-2.html">Home 4</a></li>
                                            </ul>
                                        </li>
            
                                        <li><a className="current" href="#">Listings</a>
                                            <ul>
                                                <li><a href="#">List Layout</a>
                                                    <ul>
                                                        <li><a href="unused/list-sidebar-sliders.html">With Sidebar</a></li>
                                                        <li><a href="unused/list-map-side-filter.html">With Map</a></li>
                                                        <li><a href="list-full.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Grid Layout</a>
                                                    <ul>
                                                        <li><a href="unused/list-grid-standard-with-sidebar.html">Standard With
                                                            Sidebar</a></li>
                                                        <li><a href="listings-grid-compact-with-sidebar.html">Compact With
                                                            Sidebar</a></li>
                                                        <li><a href="list-grid-with-map.html">With Map</a></li>
                                                        <li><a href="list-grid.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Half Map</a>
                                                    <ul>
                                                        <li><a href="list-half-map.html">List Layout</a></li>
                                                        <li><a href="listings-half-map-grid-standard.html">Grid Standard Layout</a>
                                                        </li>
                                                        <li><a href="unused/list-half-map-grid-compact.html">Grid Compact Layout</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
            
                                        <li><a href="#">Features</a>
                                            <ul>
                                                <li><a href="#">Single Properties</a>
                                                    <ul>
                                                        <li><a href="property-page.html">Property Style 1</a></li>
                                                        <li><a href="unused/single-property-page-2.html">Property Style 2</a></li>
                                                        <li><a href="unused/single-property-page-3.html">Property Style 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Search Styles</a>
                                                    <ul>
                                                        <li><a href="unused/index-1.html">Home Search 1</a></li>
                                                        <li><a href="index1.html">Home Search 2</a></li>
                                                        <li><a href="index.html">Home Search 3</a></li>
                                                        <li><a href="list-full.html">Advanced Style</a></li>
                                                        <li><a href="unused/list-sidebar-sliders.html">Sidebar Search</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">My Account</a>
                                                    <ul>
                                                        <li><a href="my-profile.html">My Profile</a></li>
                                                        <li><a href="my-bookmarks.html">Bookmarked Listings</a></li>
                                                        <li><a href="my-properties.html">My Properties</a></li>
                                                        <li><a href="change-password.html">Change Password</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Agencies & Agents</a>
                                                    <ul>
                                                        <li><a href="agencies-list.html">Agencies List</a></li>
                                                        <li><a href="agency-page.html">Agency Page</a></li>
                                                        <li><a href="agents-list.html">Agents List</a></li>
                                                        <li><a href="agent-page.html">Agent Page</a></li>
                                                    </ul>
                                                </li>
            
                                                <li><a href="compare.html">Compare Properties</a></li>
                                                <li><a href="submit-property.html">Submit Property</a></li>
                                            </ul>
                                        </li>
            
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="unused/blog.html">Blog</a>
                                                    <ul>
                                                        <li><a href="unused/blog.html">Blog</a></li>
                                                        <li><a href="unused/blog-post.html">Blog Post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="unused/elements.html">Elements</a></li>
                                                <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                                <li><a href="unused/typography.html">Typography</a></li>
                                                <li><a href="icons.html">Icons</a></li>
                                            </ul>
                                        </li>
            
                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                                {/* <!-- Main Navigation / End --> */}
            
                            </div>
                            {/* <!-- Left Side Content / End --> */}
            
                            {/* <!-- Right Side Content / End --> */}
                            <div className="right-side">
                                {/* <!-- Header Widget --> */}
                                <div className="header-widget">
                                    <a href="login-register.html" className="sign-in"><i className="fa fa-user"></i> Log In / Register</a>
                                    <a href="submit-property.html" className="button border">Submit Property</a>
                                </div>
                                {/* <!-- Header Widget / End --> */}
                            </div>
                            {/* <!-- Right Side Content / End --> */}
            
                        </div>
                    </div>
                    {/* <!-- Header / End --> */}
            
                </header>
                <div className="clearfix"></div>
                {/* <!-- Header Container / End --> */}
                </div>

    )
  }
}

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default Header;
