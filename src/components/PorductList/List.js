import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
var slideIndex = 1;
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {layout: 'list'}
      }
    setLayout= (layout)=>{
        this.setState({
            layout:layout
        })
    }

 plusDivs=(n,name)=> {
  this.showDivs(slideIndex += n,name);
}

 showDivs=(n,name)=> {
  var i;
  var x = document.getElementsByClassName(name);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
  render() {
    return (
        <div className="container">
        <div className="row fullwidth-layout">

            <div className="col-md-12">

                {/* <!-- Sorting / Layout Switcher --> */}
                <div className="row margin-bottom-15">

                    <div className="col-md-6">
                        {/* <!-- Sort by --> */}
                        <div className="sort-by">
                            <label>Sort by:</label>

                            <div className="sort-by-select">
                                <select data-placeholder="Default order" className="chosen-select-no-single">
                                    <option>Default Order</option>
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                    <option>Newest Properties</option>
                                    <option>Oldest Properties</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        {/* <!-- Layout Switcher --> */}
                        <div className="layout-switcher">
                            <a  onClick={()=>this.setLayout("list")} className={this.state.layout === "list"?"list active":"list"}><i className="fa fa-th-list"></i></a>
                            <a onClick={()=>this.setLayout("grid")} className={this.state.layout === "grid"?"grid active":"grid"}><i className="fa fa-th-large"></i></a>
                            <a onClick={()=>this.setLayout("grid-three")} className={this.state.layout === "grid-three"?"grid-three active":"grid-three"}><i className="fa fa-th"></i></a>
                        </div>
                    </div>
                </div>


                {/* <!-- Listings --> */}
                <div className={`listings-container ${this.state.layout}-layout`}>

                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a className="listing-img-container">

                            <div className="listing-badges">
                                <span className="featured">Featured</span>
                                <span>For Sale</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$275,000 <i>$520 / sq ft</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                <span className="fa fa-share-alt with-tip" data-tip-content="Share"></span>
                            </div>

                            <div className="listing-carousel">
                                <div  className="images_Eagle_Apartments"><img src={require("../../assets/images/listing-01.jpg")} alt=""/></div>
                                <div  className="images_Eagle_Apartments"><img src={require("../../assets/images/listing-01b.jpg")} alt=""/></div>
                                <div  className="images_Eagle_Apartments"><img src={require("../../assets/images/listing-01c.jpg")} alt=""/></div>
                                <div className="newSlideButtonLeft" onClick={()=>this.plusDivs(-1,'images_Eagle_Apartments')}>&#10094;</div>
                                <div className="newSlideButtonRight"  onClick={()=>this.plusDivs(1,'images_Eagle_Apartments')}>&#10095;</div>
                            </div>
                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="property-page.html">Eagle Apartments</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    9364 School St. Lynchburg, NY
                                </a>
                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>530 sq ft</li>
                                <li>1 Bedroom</li>
                                <li>3 Rooms</li>
                                <li>1 Bathroom</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> David Strozier</a>
                                <span><i className="fa fa-calendar-o"></i> 1 day ago</span>
                            </div>

                        </div>

                    </div>
                    {/* <!-- Listing Item / End --> */}


                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a href="property-page.html" className="listing-img-container">

                            <div className="listing-badges">
                                <span>For Rent</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$900 <i>monthly</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                <span className="fa fa-share-alt with-tip" data-tip-content="Share"></span>
                            </div>

                            <img src={require("../../assets/images/listing-02.jpg")} alt=""/>

                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="#">Serene Uptown</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    6 Bishop Ave. Perkasie, PA
                                </a>

                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>440 sq ft</li>
                                <li>1 Bedroom</li>
                                <li>1 Room</li>
                                <li>1 Bathroom</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> Harriette Clark</a>
                                <span><i className="fa fa-calendar-o"></i> 2 days ago</span>
                            </div>

                        </div>

                    </div>
                    {/* <!-- Listing Item / End --> */}


                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a href="property-page.html" className="listing-img-container">

                            <div className="listing-badges">
                                <span className="featured">Featured</span>
                                <span>For Rent</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$1700 <i>monthly</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                            </div>

                            <img src={require("../../assets/images/listing-03.jpg")} alt=""/>

                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="#">Meridian Villas</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    778 Country St. Panama City, FL
                                </a>

                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>1450 sq ft</li>
                                <li>1 Bedroom</li>
                                <li>2 Rooms</li>
                                <li>2 Rooms</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> Chester Miller</a>
                                <span><i className="fa fa-calendar-o"></i> 4 days ago</span>
                            </div>

                        </div>
                        {/* <!-- Listing Item / End --> */}

                    </div>
                    {/* <!-- Listing Item / End --> */}


                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a href="property-page.html" className="listing-img-container">

                            <div className="listing-badges">
                                <span>For Sale</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$420,000 <i>$770 / sq ft</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                            </div>

                            <div className="listing-carousel">
                                <div><img className="Images_Selway_Apartments" src={require("../../assets/images/listing-04.jpg")} alt=""/></div>
                            </div>

                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="#">Selway Apartments</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    33 William St. Northbrook, IL
                                </a>

                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>540 sq ft</li>
                                <li>1 Bedroom</li>
                                <li>3 Rooms</li>
                                <li>2 Bathroom</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> Kristen Berry</a>
                                <span><i className="fa fa-calendar-o"></i> 3 days ago</span>
                            </div>

                        </div>
                        {/* <!-- Listing Item / End --> */}

                    </div>
                    {/* <!-- Listing Item / End --> */}


                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a href="property-page.html" className="listing-img-container">
                            <div className="listing-badges">
                                <span>For Sale</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$535,000 <i>$640 / sq ft</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                            </div>

                            <img src={require("../../assets/images/listing-05.jpg")} alt=""/>
                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="#">Oak Tree Villas</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    71 Lower River Dr. Bronx, NY
                                </a>

                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>350 sq ft</li>
                                <li>1 Bedroom</li>
                                <li>2 Rooms</li>
                                <li>1 Bathroom</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> Mabel Gagnon</a>
                                <span><i className="fa fa-calendar-o"></i> 4 days ago</span>
                            </div>

                        </div>
                        {/* <!-- Listing Item / End --> */}

                    </div>
                    {/* <!-- Listing Item / End --> */}


                    {/* <!-- Listing Item --> */}
                    <div className="listing-item">

                        <a href="property-page.html" className="listing-img-container">
                            <div className="listing-badges">
                                <span>For Rent</span>
                            </div>

                            <div className="listing-img-content">
                                <span className="listing-price">$500 <i>monthly</i></span>
                                <span className="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                <span className="compare-button with-tip" data-tip-content="Add to Compare"></span>
                            </div>

                            <img src={require("../../assets/images/listing-06.jpg")} alt=""/>
                        </a>

                        <div className="listing-content">

                            <div className="listing-title">
                                <h4><a href="#">Old Town Manchester</a></h4>
                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                   className="listing-address popup-gmaps">
                                    <i className="fa fa-map-marker"></i>
                                    7843 Durham Avenue, MD
                                </a>

                                <a href="property-page.html" className="details button border">Details</a>
                            </div>

                            <ul className="listing-details">
                                <li>850 sq ft</li>
                                <li>2 Bedroom</li>
                                <li>3 Rooms</li>
                                <li>1 Bathroom</li>
                            </ul>

                            <div className="listing-footer">
                                <a href="#"><i className="fa fa-user"></i> Charles Watson</a>
                                <span><i className="fa fa-calendar-o"></i> 3 days ago</span>
                            </div>

                        </div>

                    </div>
                    {/* <!-- Listing Item / End --> */}

                </div>
                {/* <!-- Listings Container / End --> */}

                <div className="clearfix"></div>
                {/* <!-- Pagination --> */}
                <div className="pagination-container margin-top-20">
                    <nav className="pagination">
                        <ul>
                            <li><a href="#" className="current-page">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li className="blank">...</li>
                            <li><a href="#">22</a></li>
                        </ul>
                    </nav>

                    <nav className="pagination-next-prev">
                        <ul>
                            <li><a href="#" className="prev">Previous</a></li>
                            <li><a href="#" className="next">Next</a></li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- Pagination / End --> */}

            </div>

        </div>
    </div>

    )
  }
}

ProductList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default ProductList;
