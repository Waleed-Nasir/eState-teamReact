import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

class SearchTool extends Component {
  render() {

    return (
        <section className="search margin-bottom-50">
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    {/* <!-- Title --> */}
                    <h3 className="search-title">Search</h3>

                    {/* <!-- Form --> */}
                    <div className="main-search-box no-shadow">


                        {/* <!-- Row With Forms --> */}
                        <div className="row with-forms">

                            {/* <!-- Status --> */}
                            <div className="col-md-3">
                                <select data-placeholder="Any Status" className="chosen-select-no-single">
                                    <option>Any Status</option>
                                    <option>For Sale</option>
                                    <option>For Rent</option>
                                </select>
                            </div>

                            {/* <!-- Property Type --> */}
                            <div className="col-md-3">
                                <select data-placeholder="Any Type" className="chosen-select-no-single">
                                    <option>Any Type</option>
                                    <option>Apartments</option>
                                    <option>Houses</option>
                                    <option>Commercial</option>
                                    <option>Garages</option>
                                    <option>Lots</option>
                                </select>
                            </div>

                            {/* <!-- Main Search Input --> */}
                            <div className="col-md-6">
                                <div className="main-search-input">
                                    <input type="text" placeholder="Enter address e.g. street, city or state" value=""/>
                                    <button className="button">Search</button>
                                </div>
                            </div>

                        </div>
                        {/* <!-- Row With Forms / End --> */}


                        {/* <!-- Row With Forms --> */}
                        <div className="row with-forms">

                            {/* <!-- Min Price --> */}
                            <div className="col-md-3">

                                {/* <!-- Select Input --> */}
                                <div className="select-input disabled-first-option">
                                    <input type="text" placeholder="Min Area" data-unit="Sq Ft"/>
                                    <select>
                                        <option>Min Area</option>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        <option>700</option>
                                        <option>800</option>
                                        <option>1000</option>
                                        <option>1500</option>
                                    </select>
                                </div>
                                {/* <!-- Select Input / End --> */}

                            </div>

                            {/* <!-- Max Price --> */}
                            <div className="col-md-3">

                                {/* <!-- Select Input --> */}
                                <div className="select-input disabled-first-option">
                                    <input type="text" placeholder="Max Area" data-unit="Sq Ft"/>
                                    <select>
                                        <option>Max Area</option>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        <option>700</option>
                                        <option>800</option>
                                        <option>1000</option>
                                        <option>1500</option>
                                    </select>
                                </div>
                                {/* <!-- Select Input / End --> */}

                            </div>


                            {/* <!-- Min Price --> */}
                            <div className="col-md-3">

                            {/* <!-- Select Input --> */}
                            <div className="select-input disabled-first-option">
                                <input type="text" placeholder="Min Price" data-unit="USD"/>
                                <select>
                                    <option>Min Price</option>
                                    <option>1 000</option>
                                    <option>2 000</option>
                                    <option>3 000</option>
                                    <option>4 000</option>
                                    <option>5 000</option>
                                    <option>10 000</option>
                                    <option>15 000</option>
                                    <option>20 000</option>
                                    <option>30 000</option>
                                    <option>40 000</option>
                                    <option>50 000</option>
                                    <option>60 000</option>
                                    <option>70 000</option>
                                    <option>80 000</option>
                                    <option>90 000</option>
                                    <option>100 000</option>
                                    <option>110 000</option>
                                    <option>120 000</option>
                                    <option>130 000</option>
                                    <option>140 000</option>
                                    <option>150 000</option>
                                </select>
                            </div>
                            {/* <!-- Select Input / End --> */}

                            </div>


                            {/* <!-- Max Price --> */}
                            <div className="col-md-3">

                                {/* <!-- Select Input --> */}
                                <div className="select-input disabled-first-option">
                                    <input type="text" placeholder="Max Price" data-unit="USD"/>
                                    <select>
                                        <option>Max Price</option>
                                        <option>1 000</option>
                                        <option>2 000</option>
                                        <option>3 000</option>
                                        <option>4 000</option>
                                        <option>5 000</option>
                                        <option>10 000</option>
                                        <option>15 000</option>
                                        <option>20 000</option>
                                        <option>30 000</option>
                                        <option>40 000</option>
                                        <option>50 000</option>
                                        <option>60 000</option>
                                        <option>70 000</option>
                                        <option>80 000</option>
                                        <option>90 000</option>
                                        <option>100 000</option>
                                        <option>110 000</option>
                                        <option>120 000</option>
                                        <option>130 000</option>
                                        <option>140 000</option>
                                        <option>150 000</option>
                                    </select>
                                </div>
                                {/* <!-- Select Input / End --> */}

                            </div>


                            <div className="col-md-6">
                                {/* <!-- Price Range --> */}
                                <div className="range-slider">
                                    <label>Price Range</label>
                                    <div id="price-range" data-min="0" data-max="400000" data-unit="$"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {/* <!-- Area Range --> */}
                                <div className="range-slider">
                                    <label>Area Range</label>
                                    <div id="area-range" data-min="0" data-max="1500" data-unit="sq ft"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- Row With Forms / End --> */}


                        {/* <!-- More Search Options --> */}
                        <a href="#" className="more-search-options-trigger margin-top-10" data-open-title="More Options" data-close-title="Less Options"></a>
                        <div className="more-search-options relative">
                            <div className="more-search-options-container">
                                {/* <!-- Row With Forms --> */}
                                <div className="row with-forms">

                                    {/* <!-- Age of Home --> */}
                                    <div className="col-md-3">
                                        <select data-placeholder="Age of Home" className="chosen-select-no-single">
                                            <option label="blank"></option>
                                            <option>Age of Home (Any)</option>
                                            <option>0 - 1 Years</option>
                                            <option>0 - 5 Years</option>
                                            <option>0 - 10 Years</option>
                                            <option>0 - 20 Years</option>
                                            <option>0 - 50 Years</option>
                                            <option>50 + Years</option>
                                        </select>
                                    </div>

                                    {/* <!-- Rooms Area --> */}
                                    <div className="col-md-3">
                                        <select data-placeholder="Rooms" className="chosen-select-no-single">
                                            <option label="blank"></option>
                                            <option>Rooms (Any)</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    {/* <!-- Min Area --> */}
                                    <div className="col-md-3">
                                        <select data-placeholder="Beds" className="chosen-select-no-single">
                                            <option label="blank"></option>
                                            <option>Beds (Any)</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    {/* <!-- Max Area --> */}
                                    <div className="col-md-3">
                                        <select data-placeholder="Baths" className="chosen-select-no-single">
                                            <option label="blank"></option>
                                            <option>Baths (Any)</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                </div>
                                {/* <!-- Row With Forms / End --> */}


                                {/* <!-- Checkboxes --> */}
                                <div className="checkboxes in-row">

                                    <input id="check-2" type="checkbox" name="check"/>
                                    <label htmlFor="check-2">Air Conditioning</label>

                                    <input id="check-3" type="checkbox" name="check"/>
                                    <label htmlFor="check-3">Swimming Pool</label>

                                    <input id="check-4" type="checkbox" name="check"/>
                                    <label htmlFor="check-4">Central Heating</label>

                                    <input id="check-5" type="checkbox" name="check"/>
                                    <label htmlFor="check-5">Laundry Room</label>


                                    <input id="check-6" type="checkbox" name="check"/>
                                    <label htmlFor="check-6">Gym</label>

                                    <input id="check-7" type="checkbox" name="check"/>
                                    <label htmlFor="check-7">Alarm</label>

                                    <input id="check-8" type="checkbox" name="check"/>
                                    <label htmlFor="check-8">Window Covering</label>

                                </div>
                                {/* <!-- Checkboxes / End --> */}

                            </div>
                        </div>
                        {/* <!-- More Search Options / End --> */}

                    </div>
                    {/* <!-- Box / End --> */}
                </div>
            </div>
        </div>
    </section>



    )
  }
}

SearchTool.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default SearchTool;
