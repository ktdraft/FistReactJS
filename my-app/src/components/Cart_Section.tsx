import React, { Component } from 'react'
import Cart_MainSection from './Cart_MainSection'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';

export default class Cart_Section extends Component {
    render() {
        return (
            <div className="all-frame">
                <div className="khung-chua-my-card">
                    <div className="header-my-cart">
                        Giỏ hàng của tôi
                    </div>
                    <div id="my-cart">
                        <Cart_MainSection></Cart_MainSection>
                        <Cart_MainSection></Cart_MainSection>
                        <Cart_MainSection></Cart_MainSection>
                    </div>
                </div>
                <div className="check-out">
                    <div className="header-my-cart">
                        Thông tin mua hàng
                    </div>
                    <div className="dien-thong-tin">
                        <div className="frame-input">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Nhập họ và tên" id="user" />
                            <label htmlFor="user" className="error" />
                        </div>
                        <div className="frame-input">
                            <i className="fas fa-phone-alt" />
                            <input type="text" placeholder="Số Điện Thoại" id="phone-number" />
                            <label htmlFor="phone-number" className="error" />
                        </div>
                        <div className="frame-input">
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" id="email" />
                            <label htmlFor="email" className="error" />
                        </div>
                        <div className="frame-input">
                            <i className="fas fa-map-marker-alt" />
                            <input type="text" placeholder="Địa chỉ nhận hàng" id="address" />
                            <label htmlFor="address" className="error" />
                        </div>
                        <div className="tinhTien" id="tinhTien1">
                            Total: 300,000,000 VND
                        </div>
                        <div className="xac-nhan-don-hang">
                            <button className="bntXacNhan">Xác Nhận Đơn Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
