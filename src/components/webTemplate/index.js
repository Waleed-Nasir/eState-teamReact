import React, { Component } from 'react';
import ProductList from '../PorductList/List'
import Header from '../Header/Header';
import SearchTool from '../Search/Search';
import Footer from '../Footer/Footer';
export default class WebTemplate extends React.Component {
    render() {
        return (
            <div>
                {/* // <!-- Wrapper --> */}
                <div id="wrapper">
                    <Header />
                    {/* <!-- Search================================================== --> */}
                    <SearchTool />
                    {/* <!-- Content */}
                    {/* ================================================== --> */}
                    <ProductList />
                    <Footer />
                </div>
                {/* <!-- Wrapper / End --> */}
            </div>
        )
    }
} 