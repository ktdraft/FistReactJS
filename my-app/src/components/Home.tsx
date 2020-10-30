import React, { Component } from "react";
import Product from "./Product";

export default class Home extends Component<PropsType, {}> {
    render() {
        let nameTitle = 'Điện thoại'
        return (
            <div className="product">
                <div className="header-product">
                    <div className="content-header">
                        <a href="#">
                            <h1>{this.props.title}</h1>
                        </a>
                    </div>
                </div>
                <div className="frame-product-all" id="show-phone">
                    <Product
                        imgage={"https://vcdn-sohoa.vnecdn.net/2020/10/26/iPhone-12-Pro-VnExpress-03079-8809-3623-1603700356.jpg"}
                        type={this.props.action}
                        name={"Samsum Galaxy note 10"}
                        price={16000000}
                        discount={12}
                    ></Product>
                    <Product
                        imgage={""}
                        type={this.props.action}
                        name={"Samsum Galaxy note 10"}
                        price={16000000}
                        discount={12}
                    ></Product>
                    <Product
                        imgage={""}
                        type={this.props.action}
                        name={"Samsum Galaxy note 10"}
                        price={16000000}
                        discount={12}
                    ></Product>
                    <Product
                        imgage={""}
                        type={this.props.action}
                        name={"Samsum Galaxy note 10"}
                        price={16000000}
                        discount={12}
                    ></Product>

                </div>
                <div className="load-more">Xem thêm</div>
            </div>
        );
    }
}

interface PropsType {
    title: string,
    action: string
}