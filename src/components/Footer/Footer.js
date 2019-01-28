import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

class Footer extends Component {
  render() {

    return (
        <div>
                <div className="margin-top-55"></div>
            
                <div id="footer" className="sticky-footer">
                    {/* <!-- Main --> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <img className="footer-logo" src="images/logo.png" alt=""/>
                                <br/><br/>
                                <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut
                                    lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                            </div>
            
                            <div className="col-md-4 col-sm-6 ">
                                <h4>Helpful Links</h4>
                                <ul className="footer-links">
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Add Property</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
            
                                <ul className="footer-links">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Our Agents</a></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
            
                            <div className="col-md-3  col-sm-12">
                                <h4>Contact Us</h4>
                                <div className="text-widget">
                                    <span>12345 Little Lonsdale St, Melbourne</span> <br/>
                                    Phone: <span>(123) 123-456 </span><br/>
                                    E-Mail:<span> <a href="#">office@example.com</a> </span><br/>
                                </div>
            
                                <ul className="social-icons margin-top-20">
                                    <li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
                                    <li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
                                </ul>
            
                            </div>
            
                        </div>
            
                        {/* <!-- Copyright --> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyrights">© 2018 TemplateTemplate. All Rights Reserved.</div>
                            </div>
                        </div>
            
                    </div>
            
                </div>
                <div id="backtotop"><a href="#"></a></div>
                </div>
    )
  }
}

Footer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default Footer;
