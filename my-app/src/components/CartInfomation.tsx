import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';
import CartItem from './CartItem';

export default class CartInfomation extends Component {
    render() {
        return (
            <div className="all-frame">
                <div className="khung-chua-my-card">
                    <div className="header-my-cart">
                        Giỏ hàng của tôi
                    </div>
                    <div id="my-cart">
                        <CartItem imgage={""}
                            name={"I phone 12 pro max"}
                            price={34000000}
                            count={2}
                            total={68000000}
                        ></CartItem>
                        <CartItem imgage={""}
                            name={"Samsung galaxy note 10"}
                            price={23000000}
                            count={1}
                            total={23000000}
                        ></CartItem>
                        <CartItem imgage={""}
                            name={"Xiaomi Redmi note 8"}
                            price={6000000}
                            count={3}
                            total={18000000}
                        ></CartItem>
                        <CartItem imgage={""}
                            name={"Samsung Utltra 20"}
                            price={30000000}
                            count={1}
                            total={30000000}
                        ></CartItem>
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
