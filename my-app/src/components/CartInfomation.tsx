import React, { Component } from 'react'
import '../generel.css';
import '../home.css';
import '../cart.css';
import '../admin.css';
import CartItem from './CartItem';

const ListItem = [
    {
        "ten": "LG G8",
        "hinhAnh": "https://picsum.photos/200/300",
        "giaGoc": 3800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311",
        "SoLuong": 1
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://picsum.photos/200/300",
        "giaGoc": 4800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311",
        "SoLuong": 2
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://picsum.photos/200/300",
        "giaGoc": 4800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311",
        "SoLuong": 3
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://picsum.photos/200/300",
        "giaGoc": 6800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311",
        "SoLuong": 2
    },
    {
        "ten": "LG G8",
        "hinhAnh": "https://picsum.photos/200/300",
        "giaGoc": 3800000,
        "phamTramGiamGia": 10,
        "khuVucBan": "Hà Nội",
        "type": "phone",
        "ID": "58170866271603874895311",
        "SoLuong": 4
    }
].filter((item) => {
    return (item.giaGoc - item.giaGoc * item.phamTramGiamGia / 100) > 4000000;
})

const TotalPrice = ListItem.filter((item) => {
    return (item.giaGoc - item.giaGoc * item.phamTramGiamGia / 100) > 4000000
}).map((item) => {
    return (item.giaGoc - item.giaGoc * item.phamTramGiamGia / 100) * item.SoLuong
}).reduce((x, y) => {
    return x + y;
});

console.log("Tong gia tri gio hang la: ", TotalPrice)


export default class CartInfomation extends Component {
    render() {
        return (
            <div className="all-frame">
                <div className="khung-chua-my-card">
                    <div className="header-my-cart">
                        Giỏ hàng của tôi
                    </div>
                    <div id="my-cart">
                        {ListItem.map((item) => {
                            return (
                                <CartItem imgage={item.hinhAnh}
                                    name={item.ten}
                                    price={item.giaGoc - item.giaGoc * item.phamTramGiamGia / 100}
                                    count={item.SoLuong}
                                    total={item.SoLuong * (item.giaGoc - item.giaGoc * item.phamTramGiamGia / 100)}
                                />
                            )
                        })}
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
                            {TotalPrice} VND
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
