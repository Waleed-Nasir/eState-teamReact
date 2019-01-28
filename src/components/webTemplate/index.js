import React, { Component } from 'react';
import ProductList from'../PorductList/List'
import Header from '../Header/Header';
import SearchTool from '../Search/Search';
import Footer from '../Footer/Footer';
export default class WebTemplate extends React.Component {
    render() {
        return (
            <div> 
            {/* // <!-- Wrapper --> */}
            <div id="wrapper">
            
            
                {/* <!-- Compare Properties Widget
                ================================================== --> */}
                <div className="compare-slide-menu">
            
                    <div className="csm-trigger"></div>
            
                    <div className="csm-content">
                        <h4>Compare Properties
                            <div className="csm-mobile-trigger"></div>
                        </h4>
            
                        <div className="csm-properties">
            
                            {/* <!-- Property --> */}
                            <div className="listing-item compact">
                                <a href="unused/single-property-page-2.html" className="listing-img-container">
                                    <div className="remove-from-compare"><i className="fa fa-close"></i></div>
                                    <div className="listing-badges">
                                        <span>For Sale</span>
                                    </div>
                                    <div className="listing-img-content">
                                        <span className="listing-compact-title">Eagle Apartments <i>$420,000</i></span>
                                    </div>
                                    <img src={require("../../assets/images/listing-01.jpg")} alt=""/>
                                </a>
                            </div>
            
                            {/* <!-- Property --> */}
                            <div className="listing-item compact">
                                <a href="unused/single-property-page-2.html" className="listing-img-container">
                                    <div className="remove-from-compare"><i className="fa fa-close"></i></div>
                                    <div className="listing-badges">
                                        <span>For Sale</span>
                                    </div>
                                    <div className="listing-img-content">
                                        <span className="listing-compact-title">Selway Apartments <i>$420,000</i></span>
                                    </div>
                                    <img src="images/listing-03.jpg" alt=""/>
                                </a>
                            </div>
            
                            {/* <!-- Property --> */}
                            <div className="listing-item compact">
                                <a href="unused/single-property-page-2.html" className="listing-img-container">
                                    <div className="remove-from-compare"><i className="fa fa-close"></i></div>
                                    <div className="listing-badges">
                                        <span>For Sale</span>
                                    </div>
                                    <div className="listing-img-content">
                                        <span className="listing-compact-title">Oak Tree Villas <i>$535,000</i></span>
                                    </div>
                                    <img src="images/listing-05.jpg" alt=""/>
                                </a>
                            </div>
            
                        </div>
            
                        <div className="csm-buttons">
                            <a href="compare.html" className="button">Compare</a>
                            <a href="#" className="button reset">Reset</a>
                        </div>
                    </div>
            
                </div>
                {/* <!-- Compare Properties Widget / End --> */}
            
            
   <Header/>
            
            
                {/* <!-- Search
                ================================================== --> */}
               

<SearchTool/>




                {/* <!-- Content */}
                {/* ================================================== --> */}
               <ProductList/>
            
               <Footer/>
            
            
                {/* <!-- Back To Top Button --> */}
                
                {/* <!-- Scripts
                ================================================== -->  */}

            
            </div>
            {/* <!-- Wrapper / End --> */}
            </div>
        )
    }
} 