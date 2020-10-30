import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';

export default class Header extends Component {
    render() {
        return (
            <div className="frameMenu">
                <div className="logo">
                    <a href="index.html"><img src="#" alt="" /></a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="#">Sản phẩm</a></li>
                        <li><a href="#">Điện thoại</a>
                            <ul>
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">Samsung</a></li>
                                <li><a href="#">Xiaomi</a></li>
                                <li><a href="#">Oppo</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Laptop</a>
                            <ul>
                                <li><a href="#">Lenovo</a></li>
                                <li><a href="#">Dell</a></li>
                                <li><a href="#">Macbook</a></li>
                                <li><a href="#">Asus</a></li>
                                <li><a href="#">MSI</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Phụ kiện</a>
                            <ul>
                                <li><a href="#">Tai nghe</a></li>
                                <li><a href="#">Loa</a></li>
                                <li><a href="#">Bàn phím</a></li>
                                <li><a href="#">Chuột máy tính</a></li>
                                <li><a href="#">Bàn phím</a></li>
                                <li><a href="#">Chuột máy tính</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Thông tin</a></li>
                        <li><a href="#">Liên hệ</a></li>
                    </ul>
                </div>
                <div className="account">
                    <div className="login">
                        <a href="/admin/">
                            <i className="fas fa-user-shield"></i>
                        </a>
                    </div>
                    <div className="cart">
                        <a href="/cart/">
                            <i className="fas fa-cart-plus"></i>
                        </a>
                        <p className="cart-number" />
                    </div>
                </div>
            </div>
        )
    }
}
