import React, { Component } from "react";
import Admin_MainSection from "./Admin_MainSection";

export default class Admin_Section extends Component {
    render() {
        let nameTitle = 'Điện thoại'
        return (
            <div className="product">
                <div className="header-product">
                    <div className="content-header">
                        <a href="#">
                            <h1>{nameTitle}</h1>
                        </a>
                    </div>
                </div>
                <div className="frame-product-all" id="show-phone">
                    <Admin_MainSection></Admin_MainSection>
                    <Admin_MainSection></Admin_MainSection>
                    <Admin_MainSection></Admin_MainSection>
                    <Admin_MainSection></Admin_MainSection>
                </div>
                <div className="load-more">Xem thêm</div>
            </div>
        );
    }
}
