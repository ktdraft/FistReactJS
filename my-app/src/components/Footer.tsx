import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';

export default class Footer extends Component {
    render() {
        return (
            <div className ="footer">
                <div className="footer-top">
                    <div className="left">
                        Hãy là người đầu tiên biết về Ưu đãi và Ưu đãi đặc biệt !!
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Nhập địa chỉ email" />
                        <button type="submit">Đăng kí</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="left">
                        <h2>Liên lạc với tôi</h2>
                        <ul>
                            <li>Vương Ngọc Kim</li>
                            <li>0123456789</li>
                            <li>kimvnpk01572@fpt.edu.vn</li>
                            <li>27 Nguyễn Tất Thành</li>
                            <li>TP. Buôn Mê Thuột</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">Tất cả sản phẩm</a></li>
                            <li><a href="#">Điện thoại</a></li>
                            <li><a href="#">Laptop</a></li>
                            <li><a href="#">Phụ kiện</a></li>
                            <li><a href="#">Thông tin</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Mua và trả hàng</a></li>
                            <li><a href="#">Chính sách lưu trữ</a></li>
                            <li><a href="#">Thanh toán</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
