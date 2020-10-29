import React, { Component } from 'react'

export default class Admin_MainSection extends Component {
    render() {
        let tenSanPham = 'Iphone 12 pro max';
        let giaSanPham = '30.000.000 VND';
        let giamGia = '10 %';
        return (
            <div className="khungSanPham" >
                <div className="hinhAnhSanPham " id="">
                    <img src="https://cdn.shopify.com/s/files/1/1206/7736/products/WM_Monstera_Leaf_Phone_9059_Square_1100x.jpg?v=1532140999" alt="" />
                    <button className="bnt">
                        <p>Edit product</p>
                    </button>
                </div>
                <h3 className="tenSanPham">{tenSanPham}</h3>
                <p className="giaSauKhiGiam">{giaSanPham}</p>
                <div className="phanTramGiam">{giamGia}</div>
            </div>
        )
    }
}
