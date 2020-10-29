import React, { Component } from 'react'

export default class Cart_MainSection extends Component {
    render() {
        return (
            <div className="khungItem">
                <div className="hinhAnhItem">
                    <img src="" alt="" />
                </div>
                <div className="khungTenVaGia">
                    <div className="tenItem">
                        <p>I phone 12 pro max</p>
                    </div>
                    <div className="GiaItem">
                        <p>30,000,000 VND</p>
                    </div>
                </div>
                <div className="soLuongItem">
                    <input type="number" className="soLuong" id="" value='10' />
                </div>
                <div className="thanhTien">100,000,000 VND</div>
                <button className="xoaItemGioHang"><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}
