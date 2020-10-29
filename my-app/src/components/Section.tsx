import React, { Component } from 'react'
import MainSection from './MainSection'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';

export default class Section extends Component {
    render() {
        return (
            <div className="product">
                <div className="header-product">
                    <div className="content-header">
                        <a href="#">
                            <h1>Điện thoại</h1>
                        </a>
                    </div>
                </div>
                <div className="frame-product-all" id="show-phone">
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                </div>
                <div className="load-more" >
                    xem thêm
                    </div>
            </div>

        )
    }
}
